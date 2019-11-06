import errorCode from "@/plugins/Filters/errorCode";
import comma from "@/plugins/Filters/comma";
import nya from "@/plugins/Filters/nya";
/**
 * フィルター
 */
export default {
    install(vue) {

        vue.filter("nya", nya)

        vue.filter("comma", comma);

        vue.filter("errorCode", errorCode);

        /**
         * 関数としても定義
         * @type {{comma: Function, nya: Function, errorCode: Function}}
         */
        vue.prototype.$filters = {
            nya,
            comma,
            errorCode
        };

    }
};
