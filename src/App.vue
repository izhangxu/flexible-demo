<template>
  <div id="app">
    <div class="header">
      <p>大标题</p>
      <div class="handle">
        <span class="set fa fa-cog"></span>
        <span class="close fa fa-close"></span>
      </div>
    </div>
    <div class="date">
      <span class="prev">前一天</span>
      <span class="day">2019年09月16日(今天)</span>
      <span class="next grey">后一天</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="scss" scoped>
@mixin font-dpr($font-size){
  font-size: $font-size;

  [data-dpr="2"] & {
      font-size: $font-size * 2;
  }

  [data-dpr="3"] & {
      font-size: $font-size * 3;
  }
}
#app {
  width: 100%;
  height: 100vh;
  @include font-dpr(16px);
  .header {
    position: relative;
    height: 44px;
    padding: 10px 0;
    box-sizing: border-box;
    p {
      @include font-dpr(18px);
      color: rgba(0,0,0,0.87);
      letter-spacing: 0;
      text-align: center;
      margin:0 auto;
      height: 24px;
      line-height: 24px;
    }
    .handle {
      position: absolute;
      right: 10px;
      width: 81px;
      height: 26px;
      border: 1px solid #f7f7f7;
      border-radius: 13.5px;
      top: 8px;
      span {
        display: inline-block;
        width: 40px;
        padding: 5px 0;
        text-align: center;
        cursor: pointer;
        &.set {
          border-right: 1px solid #f7f7f7;
        }
      }
    }
  }
  .date {
    height: 43px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > span {
      @include font-dpr(12px);
      color: rgba(0,0,0,0.60);
      line-height: 18px;
    }
    .day {
      @include font-dpr(14px);
      color: #000;
    }
    .grey {
      color: rgba(0,0,0,0.24);
    }
    .prev {
      position: relative;
      &::before {
        content: '<';
        position: absolute;
        left: -10px;
        top: -1px;
      }
    }
    .next {
      position: relative;
      &::after {
        content: '>';
        position: absolute;
        right: -10px;
        top: -1px;
      }
    }
  }
}
</style>