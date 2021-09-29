<template>
  <v-app app>
    <v-container fluid>
      <div class="main">
        <div class="main__text">
          Мои сделки
        </div>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Найти сделку по дате или номеру договора"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="trade_mas"
            :search="search"
            item-key="N"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            class="elevation-1"
            @page-count="pageCount = $event"
            hide-default-footer
          >
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="getColor(item.status)"
                dark
                :text-color="ColorText(item.status)"
              >
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
          <div class="text-center pt-3">
            <v-col class="d-flex" cols="12" sm="2">
              <v-text-field
                :value="itemsPerPage"
                label="Количество строк"
                type="number"
                min="1"
                @input="itemsPerPage = parseInt($event, 10)"
              ></v-text-field>
            </v-col>
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="total_visible"
              circle
              color="#71BF45"
            />
            <div class="pagination__info">
              {{ `${this.getSecond}-${this.getBegin}` }} из
              {{ trade_mas.length }}
            </div>
          </div>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      total_visible: 7,
      page: 1,
      pageCount: 6,
      itemsPerPage: 5,
      search: "",
      headers: [
        {
          text: "№",
          align: "start",
          sortable: true,
          value: "N",
        },
        {
          text: "Создана",
          value: "created",
        },
        {
          text: "Товар",
          value: "product",
        },
        { text: "Обьем", value: "volume" },
        { text: "Фасовка", value: "packaging" },
        { text: "Сумма", value: "summ" },
        { text: "Тип доставки", value: "delivery_type" },
        { text: "Контраген", value: "counterparty" },
        { text: "Доставка", value: "delivary" },
        { text: "Статус", value: "status" },
      ],
    };
  },
  name: "Table",
  mounted() {
    //do something after mounting vue instance
    this.GET_TRADE_FROM_API(); //наш get json
    this.maxWidth();
  },
  computed: {
    ...mapGetters(["trade", "searchValue"]),
    filteredList() {
      // Поиск
      // фильтр поиска по категории
      let comp = this.search;
      if (this.search) {
        return this.trade_mas.filter(function(elem) {
          if (comp === "") return true;
          else return elem.N.toLowerCase().indexOf(comp.toLowerCase()) > -1;
        });
      } else {
        return this.trade_mas.N;
      }
    },

    trade_mas() {
      // массив json
      let mas = [];
      for (let i in this.trade.trade) {
        mas.push(this.trade.trade[i]);
      }
      return mas;
    },
    getBegin() {
      let mas = 0;
      if (this.page == 1) {
        return this.itemsPerPage;
      } else {
        for (let i = 0; i < this.page; i++) {
          mas += this.itemsPerPage;
        }
        if (this.itemsPerPage == NaN) {
          return 0;
        }
        if (this.page == Math.ceil(this.trade_mas.length / this.itemsPerPage)) {
          return this.trade_mas.length;
        }
        return mas;
      }
    },
    getSecond() {
      if (this.page == 1) {
        return 1;
      } else {
        if (this.page == Math.ceil(this.trade_mas.length / this.itemsPerPage)) {
          return this.getBegin - 1;
        }
        if (this.itemsPerPage == NaN) {
          return 0;
        }
        return this.getBegin - this.itemsPerPage + 1;
      }
    },
  },
  methods: {
    ...mapActions(["GET_TRADE_FROM_API", "GET_SEARCH_VALUE"]),
    searchV(value) {
      // для добавление в vuex данные поиска
      this.GET_SEARCH_VALUE(value);
    },
    getColor(N) {
      // цвет статуса
      if (N == "Завершена") return "green";
      else if (N == "Оплата") return "#CAE7BA";
      else if (N == "") return "transparent";
      else if (N == "Не состоялась") return "#FDDFD8";
      else return " #FDDFD8";
    },
    ColorText(N) {
      // цвет текста статуса
      if (N == "Оплата") return "#22262A";
      else if (N == "Не состоялась") return "#22262A";
    },
    filterOnlyCapsText(value, search, item) {
      // фильтр сортировки
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toLowerCase().indexOf(search) !== -1
      );
    },
    maxWidth() {
      // адаптив для телефона если разрешение будет меньще 600 px то пагинация будет стрелочная
      setInterval(() => {
        let w = window.innerWidth;
        if (w < 600) {
          this.total_visible = 0;
        } else {
          this.total_visible = 7;
        }
      }, 100);
    },
  },
};
</script>

<style>
.main__text {
  margin: 0 0 20px 0;
  font-size: 40px;
  font-family: Montserrat;
  line-height: 50px;
  font-weight: 600;
}
.v-application--is-ltr .v-data-footer__select {
  margin-left: 0 !important;
  margin-right: 20px !important;
}

/*.v-data-table {
  border-radius: 20px !important;
}
.v-sheet.v-card {
  border-radius: 20px !important;
}
*/
.v-data-footer {
  font-size: 15px !important;
}
.text-center {
  display: flex;
  align-items: center;
  justify-content: space-between !important;
}
@media (max-width: 640px) {
  .text-center {
    flex-direction: column;
  }
}
/*.v-application .primary {
  background-color:  #71BF45 !important;
  color: #fff !important;
}
*/
.v-pagination--circle .v-pagination__item,
.v-pagination--circle .v-pagination__more,
.v-pagination--circle .v-pagination__navigation {
  border-radius: 10px !important;
  padding: 0px 20px !important;
}
.v-chip.v-size--default {
  border-radius: 5px !important;
}
.main {
  margin-left: 40px;
  margin-right: 40px;
  margin: 1.5em;
}
@media (max-width: 600px) {
  .main {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin: 0 !important;
  }
}
@media (max-width: 600px) {
  .text__countcol {
    text-align: center;
  }
}
.pagination__info {
  margin-right: 20px;
}
@media (max-width: 643px) {
  .pagination__info {
    margin-top: 30px;
    margin-right: 0 !important;
  }
}
.v-pagination__item {
  transition: 0.7s cubic-bezier(0, 0, 0.2, 1) !important;
}
</style>
