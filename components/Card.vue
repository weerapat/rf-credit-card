<template>
  <div class="col-xs-12 card-box">
    <div class="card-box-1">
      <div class="card-item card-img">
        <ImgResponsive
          :default-source="logo.defaultSource"
          :sources="logo.sources"
        />
      </div>
      <div class="card-header">
        <div class="card-item card-title">CARD number {{ card.id }}</div>
        <div class="card-item card-highlight">
          <div class="applied-number">
            <span class="badge">123</span> Applies this month
          </div>
          <div class="highlight-badge">
            <i class="glyphicon glyphicon-thumbs-up"></i> Recommended
          </div>
          <div class="yearly-fee-tag">
            <i class="glyphicon glyphicon-time"></i> Yearly Fee: 1,200$
          </div>
        </div>
      </div>
    </div>
    <div class="card-box-2">
      <div class="card-item card-title">{{ item.name }}</div>
      <div class="card-item card-features">
        <div class="feature-item feature-1">
          <div class="feature-list-left">
            <i class="glyphicon glyphicon-info-sign"></i>
            <div class="feature-title">
              <div><strong>Interest Rate:</strong></div>
              <div>Per month</div>
            </div>
          </div>
          <div class="feature-list-right">20%</div>
        </div>
        <div class="feature-item feature-2">
          <div class="feature-list-left">
            <i class="glyphicon glyphicon-plane"></i>
            <div class="feature-title">
              <div><strong>Air Miles:</strong></div>
              <div>20$ - 1 ROP Miles</div>
            </div>
          </div>
          <div class="feature-list-right">12.5%</div>
        </div>
        <div class="feature-item feature-3">
          <div class="feature-list-left">
            <i class="glyphicon glyphicon-th-list"></i>
            <div class="feature-title">
              <strong>Card Benefits:</strong>
            </div>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li> consectetur adipisicing elit</li>
              <li>Ab accusamus amet dolorem dolorum exercitationem</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-item card-btns">
        <nuxt-link v-show="showMoreDetail" class="btn btn-default btn-more" to="/detail" role="button">More details</nuxt-link>
        <a class="btn btn-default btn-apply" href="#" role="button">Apply</a>
      </div>
    </div>
  </div>
</template>

<script>
  import ImgResponsive from './ImgResponsive';

  export default {
    name: 'Card',
    components: {
      ImgResponsive
    },
    props: {
      card: {
        type: Object,
      },
      showMoreDetail: Boolean,
    },

    data() {
      return {
        item: this.card,
        logo: {
          defaultSource: {
            src: 'https://dummyimage.com/1200x800/000/fff.jpg',
            alt: 'hello'
          },
          sources: [
            {
              type: 'image/jpg',
              srcset: `https://dummyimage.com/600x400/000/fff.jpg 600w,
              https://dummyimage.com/1200x800/000/fff.jpg 1200w`
            },
            {
              type: 'image/png',
              srcset: `https://dummyimage.com/600x400/000/fff.png 600w,
              https://dummyimage.com/1200x800/000/fff.png 1200w`
            }
          ],
        }
      }
    },
  }
</script>

<style lang="scss">
  .card-box {
    display: flex;
    flex-flow: column;
    padding-top: 15px;
    padding-bottom: 15px;
    @media (min-width: 768px) {
      flex-flow: row;
      flex-wrap: wrap;
    }
  }

  .card-box-1 {
    display: flex;
    width: 100%;

    .card-img {
      img {
        width: auto;
        height: 100px;
      }
    }

    .card-header {
      display: flex;
      flex-flow: column;
      width: 50%;
    }

    .applied-number {
      color: #FD0367;
      font-size: 10px;
      .badge {
        background-color: #FD0367;
        border-radius: 4px;
      }
    }

    .highlight-badge {
      color: #49CB41;
      font-size: 10px;
      border: 1px solid #49CB41;
      border-radius: 3px;
      display: inline-block;
      padding: 1px 4px;
    }

    .yearly-fee-tag {
      color: #000000;
      font-size: 10px;
    }

    .card-title {
      font-weight: bold;
      font-size: 16px;
    }

    @media (min-width: 768px) {
      width: 30%;
      flex-flow: column;

      .card-header {
        width: 100%;
      }

      .card-title {
        display: none;
      }
    }
  }

  .card-box-2 {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .card-title {
      display: none;
    }

    .card-features {
      .feature-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
      }

      .feature-list-left {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        i {
          font-size: 26px;
        }

        .feature-title {
          font-size: 10px;
          margin-left: 5px;
        }

        ul {
          margin: 15px auto 0 15px;
          flex-basis: 100%;
        }
      }

      .feature-list-right {
        font-size: 20px;
        font-weight: bold;
        color: #0066cc;
      }

      .feature-list {
        display: block;
      }
    }

    .card-features {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 70%;
      flex-flow: column;

      .card-title {
        display: block;
      }
    }
  }

  .card-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    padding-left: 10px;
    padding-right: 10px;

    .btn {
      font-size: 20px;
      border-radius: 2px;
    }

    .btn-more {
      margin-right: 0;
      border: 1px solid #0066cc;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      color: #0066cc;
      font-weight: bold;
      flex-basis: 50%;
    }

    .btn-apply {
      margin-left: 0;
      border: 1px solid #FF9001;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      background-color: #FF9001;
      color: #ffffff;
      font-weight: bold;
      flex-basis: 50%;
    }

    @media (min-width: 768px) {
      .btn {
        font-size: 16px;
      }

      .btn-more {
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
        margin-right: 5px;
      }

      .btn-apply {
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
        margin-left: 5px;
      }
    }
  }
</style>
