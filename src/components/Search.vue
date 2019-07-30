<template>
  <section class="search container">
    <!-- Type -->
    <!-- <div class="search__container form-group field-checklist"> -->
    <!-- in focus go in top -->
    <!-- <label for="type">Type</label> -->
    <!-- <div class>asdadasdasdasd</div> -->
    <!-- <form> -->
    <vue-form-generator :schema="schema" tag="div"></vue-form-generator>
    <!-- </form> -->
    <!-- </div> -->
  </section>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";

Vue.use(VueFormGenerator);
/* optional custom validators treated as 'built-in'
Vue.use(VueFormGenerator, {
  validators: objectWithCustomValidatorFunctions
});
*/

/**
 * Official documentation:
 * https://vue-generators.gitbook.io/vue-generators
 */

export default {
  data() {
    return {
      schema: {
        groups: [
          {
            // legend: "Skills & Status",
            // tag: "div",
            styleClasses: "search__fields",

            fields: [
              {
                type: "select",
                // styleClasses: "i-can-add-a-class",
                classes: "i-can-add-a-class",
                label: "Type",
                model: "type",
                values: ["Repositories", "May be another one"],
                selectOptions: {
                  hideNoneSelectedText: true
                }
              },
              {
                type: "select",
                // type: "checklist",
                label: "Language",
                model: "language",
                // multi: true,
                // multiSelect: true,
                selectOptions: {
                  hideNoneSelectedText: true
                },
                values: [
                  "Javascript",
                  "CSS",
                  "HTML",
                  "PHP",
                  "Ruby",
                  "C++",
                  "Python",
                  "C#",
                  "Java",
                  "Go",
                  "Haskel"
                ]
              },
              {
                type: "input",
                inputType: "text",
                label: "Type here for search",
                model: "search"
              }
            ]
          }
        ]
      }

      // formOptions: {
      //   validateAfterLoad: true,
      //   validateAfterChanged: true,
      //   validateAsync: true
      // }
    };
  }
};
</script>

<style>
</style>
