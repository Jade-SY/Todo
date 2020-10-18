<template>
  <div>
<ul class="list">
  <li class="list-item" v-for="(todoItem, i) in listdata" :key="i">
    <input type="checkbox" 
    :id="todoItem.item"
    :checked="todoItem.completed === true"
    @change="toggleComplete(todoItem)"
    class="list-checkbox"
    >
    <label :for="todoItem.item" class="list-label">
    </label> 
      <div class="text-box">
 <p class="list-text">{{todoItem.item}}</p>
      <p class="list-date">{{todoItem.date}}</p>
      </div>
    <v-btn class="list-delete" 
    depressed
    max-width="25"
    min-width="25"
    height="25"
    color="transparent"
    @click="removeTodo(todoItem, index)">
    x
    </v-btn>
  </li>
</ul>
  </div>
</template>

<script>
    export default {
      props: ['listdata'],
        data() {
        },
         methods: {
            toggleComplete(todoItem) {
              this.$emit('toggleItem', todoItem)
    },
      removeTodo(todoItem, index) {
        this.$emit('removeItem', todoItem, index)
  }
  },
      
    };
</script>

<style lang="scss" scoped>
.list {
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  text-decoration:none;
  padding:10px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
.list-item{
  width:100%;
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin:2.5px 0;
  input[type="checkbox"] {display: none;}
.list-label{
  	display: inline-block;
	width: 100%;
	height: 20px;
	cursor: pointer;
  position: absolute;
}
input[type="checkbox"]:checked + label:before{
   content: "\2714";
  color:#aaa;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
  .text-box{
    width:100%;
    display: flex;
    justify-content: space-between;
  } 
  p{
  padding:10px 8px 10px 15px;
    color: #325791;
    margin:0 !important;
  }
  .list-date{
      color: #3bb2d6;
    }
    .list-delete{
      span{
        color:#aaa !important;
      }
    }
}
}
</style>
