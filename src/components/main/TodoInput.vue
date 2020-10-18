<template>
    <div class="add">
        <input
            v-model="newTodoItem"
            @keyup.enter="addTodoItem"
            type="text"
            class="add-input"
            placeholder="오늘 할 일을 입력해주세요"/>
        <v-btn
            @click="addTodoItem"
            class="add-button"
            height="45"
            max-width="45"
            fab="fab"
            elevation="3"
            color="rgba(255,255,255,0.6)">
            <v-icon color="#324587">mdi-plus-thick</v-icon>
        </v-btn>
    </div>
</template>

<script>

    export default {
      props: [],
        data() {
            return {newTodoItem: ""}
        },
        methods: {
         addTodoItem() {
      if (this.newTodoItem !== "") {
        this.$emit("addItem", this.newTodoItem);
        this.clearInput();
      }
    },
            clearInput() {
                this.newTodoItem = ""
            }, 
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .add {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    input {
        width: 80%;
        height: 45px;
        outline: none;
        border: none;
        border-radius: 20px;
        background: rgba(255,255,255,0.9);
        margin: 10px 20px 10px 0;
        padding-left: 10px;
        color: #030235;
    }
    input::placeholder {
        font-size: 12px;
        color: #2949b4;
    }
    .add-button {
        font-size: 40px;
        line-height: 43px;
        text-align: center;
        color: #324587;
    }
</style>