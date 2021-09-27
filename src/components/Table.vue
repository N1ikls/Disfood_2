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
            fixed-header
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.status`]="{ item }">
              <v-chip :color="getColor(item.status)" dark>
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
              :total-visible="7"
              circle
              color="#71BF45"
            />
            <div class="mr-5">
              {{ getNumberLenght }} из {{ trade_mas.length }}
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
      page: 1,
      pageCount: 0,
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
    this.GET_TRADE_FROM_API();
  },
  computed: {
    ...mapGetters(["trade", "searchValue"]),
    filteredList() {
      // фильтр поиска по категории
      var comp = this.search;
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
      let mas = [];
      for (let i in this.trade.trade) {
        mas.push(this.trade.trade[i]);
      }
      return mas;
    },
    getNumberLenght() {
      let a = this.page;
      if (a == 1) {
        return `${this.page}-${this.itemsPerPage}`;
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
      if (N == "Завершена") return "green";
      else if (N == "Оплата") return "#CAE7BA";
      else if (N == "") return "transparent";
      else if (N == "Не состоялась") return "#FDDFD8";
      else return " #FDDFD8";
    },
    filterOnlyCapsText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toLowerCase().indexOf(search) !== -1
      );
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
</style>
