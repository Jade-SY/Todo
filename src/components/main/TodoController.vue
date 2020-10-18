<template>
    <div class="controller">
        <!-- <label for="order">Order</label> <select name="order" id="order"
        class="selectbox"> <option value="date-asc" selected="selected">Latest</option>
        <option value="date-desc">지난 날짜 순</option> </select> -->
        <v-select
            :items="items"
            label="정렬"
            elevation="1"
            height="36"
            solo="solo"
            class="select-box"></v-select>
        <v-btn @click="clearTodo" 
        class="clear" elevation="1" height="48" color="rgba(255,255,255,1)">Clear All</v-btn>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: ['Latest', 'lll']
        }),
        methods: {
            clearTodo() {
                localStorage.clear()
            }
        }
    };
</script>

<style lang="scss" scoped="scoped">
    .controller {
        display: flex;
        justify-content: space-between;
        padding: 20px 8px 0;
    }
    .theme--light.v-input {
        width: 116px;
        max-width: 116px;
    }

    .clear {
        color: rgb(15, 84, 148);
    }
</style>