<template>
  <div class="home container">
    <h2 class="heading">Hot Topics</h2>
    <div class="car">
      <q-carousel
        style="width: 80%"
        class="carousel"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        >
          <div class="absolute-top custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="data:image;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgWFhUZGRgaFRgdGhwVGBgcHBgaGBUaGhoZHRkcIS4lHh4tHxkaJzgmKy81NTU1ISQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDU0NDQ0NDQxNDQ0NDQ0NDExNDQ0NDQ0NDQ0NDQ0NP/AABEIAMwA+AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUCBAYBBwj/xAA/EAACAQIDBQUECgEDAwUAAAABAgADEQQhMQUSQVFhcYGRobEGIjJyE0JSYpKywdHh8IIUM6LS4vEHQ1Nzwv/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAApEQADAAICAQMDAwUAAAAAAAAAAQIDESExEgRBUQUykWFxoRMiI0Kx/9oADAMBAAIRAxEAPwDqomAqZKfteXuk/pM54x6AiIgCLxEAREQBERAEREAxZgNenmbCebx3rHQjLu1H6+PKesoIsdDrPEQ2G9mRx7iL94PnAPETIqRcaC/FSNPUdlpki2Fjnwz49vWN65I0NvXjI2JK3t7y3yHMar2H9jANSvkTbIrnbmv9B7x40/tJj91folPvMPetwTl3+l+Ym7traK0urkHdXkCfibpl36c7chUDOSzkkk3YnVv46csp0Yo3/czs9J6d3Xk1wv5IkW5vw4fvOz9nv9hL838nacoonR+zbmzrwDAjoWGY8ge+aZuZOv1+P/En8M6URAicZ5AiIgCImaJeAZUkvNpEhEm1SpRM7Ib0Y0qc38Jhd7M5L+bs6dfDnM8Lhb5n4fzf9vr2a2U78OFLlnNeTfCMQABYZAcomcTqMT579GQFHFWHhmPymTTxmt4geJt+s8drAnkCfATxj0DKIEQBERAEREAREQBERAMajEC+ttezjbrMK2m8Pq59o4jw8wJLKfE7doUxuqfpGAtZLWFss308LnpJmW+i0RVvUrZauuakcCb9hBy8d3wlLtTbyJvLSs7k5tqimwH+Ry0GXM8JR4/a9arcMd1PsJkD8x1b06TQnRGH3o9LB6D/AGyfg9dizFmJZibktqTPInqibnqTKS0jJB/FtSToB1nZbGwf0aAH4tW+Y6+GQ7pVbB2aWIqMMh8APH7/AO3jynTqtpzZr3wjxvXeoV14T0v5Z7ERMDgEQBJqdImNDZgiXm7RoyShh5vUqE0mGyjrRBSoyww2GBzPw/m/j1ktLD88h5n9ptWnbiwqeWc93vhGURE6DIREQDgKikjLW4PgQbeUzmCPe/dbsKj9bz1GvccjbyBHkRPGPQPKakAA8Mu4aX62mciDnc3uO5fv3byW8AREQBETxmAFyQAOJyA74B7EqsTt/DpoxqHkguPxGy+cpcV7R1myQKg5/E3iRYeB7ZecVV7G+P02W+l+eDq69dEXedlVebEAeco8Z7TIMqaFz9prqvh8R8B2zmatRnO87Fm5sST2XOg6TGbzgS7PQxfT5XNvf6I2cbj6tX43JH2Rkn4Rr/lea0RNkkuEd8Y5halaERNjCYSpUbdRSx48l+ZtB68rw3rsmqUrdPSIQsv9k7DLWeoLLwQ6nq/T7vjyllsvYqU7O/v1OB+qvyjn1OfZpLUmc15t8I8n1PrXS8Y4Xz7s8VbTD6Vc+Q1PAW4E8/7yisMuNuS6npfh25dokSJe2QspyUZIluZ+sw5DQ8tZikeaTs4AuTYdeugtz6QrnUgi/wAI+se7h+nG3D1KfvZe+44nJUv+XszJ7M5v4fCWP2nPdl/+V/uZlpnZV0RJTyucuzPPkOcsMNhm1OXTLLtPPy7dZs4fB2zOZ58AOQHCb1Kj3Dn+06Iw7MqvRDRw/T+9ZuU6QHU/3QSRQBlPZ1zCkxqmz2IiXKiIiAIiIB85pPZh1Fuy1yvdmR2kSaxDdG8iBr3j0HOfPMPjKgzFVx2O9vWbY2riBpWf/ifUGec8D+T319PyPpo7lFIJHC9x3m5Hjn39J5TUrcfVGh6cu70t1nDttTEHWs/cQPygTVquz/GzP87M35iZCwP3ZM/Tr92jua+1cOnxVUvyU7x/CtzK6v7TUx8CO/VrIP1bynKiJdYJXZ0R9Phfc2y3xHtDiG+Eqg+6Ln8TXHkJWV6rubuzOfvkm3ZfTukcTWZmekdkenxx0kIiJY1EQJPhsLUqGyIWPHdGQ7WOQ7zIb0Vqplbp6RBM6dNmYKoLMdAouT3Dh10nQYP2aOtV7fdT9XI9B3y+wuFp0xuogUcbanqTqT1MxrMl1ycGb18zxC2/4KHAezhNjVNh9hDn/k407F8Z0NCiiKFRQqjgosP/AD1kkTnq6rs8zLmvI90xERKmQAkiUr2ANh0yy5A8O6Yot5v0gq5sf3PQDiZaFtlaJcJheAG6B09B+p/mWtDDgZAf3qZhgF3syLDgOJzIz5acJYqAMp348WltnNV/BglIDXP0EliezdLRkIiJIEREAREQBERAPzscOOzsuPSSKthb1l3iNh1B8DBhyb3T4jInwlfUwdRfipuOxSw8VuJyK5fufY4/UYa+1pfvwasSQoOztgJy8pbZt5z8r8kcTYTC1DojnsR/W02aWxsQ3/tkDmxUeRN/KQ6ldspWbHPdL8ldEv6PszUPxui/KGf13ZY4f2dor8W856mw8Ft5kyjzSjnv12Kenv8AY5BFJNgCTwABJPYBmZaYXYFd9QEHN9e5Rn3G066hh0QWRFUclAHpJZlWd+yOPJ9QuvtWinwns9RTN7ufvZL+AajoxMt0QAAAAAaACwHYJ7ExqnXZxXkununsRESCgiJkE4nIDUnQCQDECeuVRS7sFVRdmYgKBzJOQEodp+2eFpe5SvXqE2Ap/DvHIDesb55WUMZSe22HrtgmfEMDUJRgiZJRXfVdwZ5t7+bEniBkJtGCqa3wjOrS3rku8f7b4REqHDt9M6KMlVgo3mVAWYgAjeYZLcnPtFl7FYirWpCrVYs7u5vugbqht0KvALloAeZ5z5psXZZXZtasR/u1qar8tJwSfxFh/jPr3srgilCmh1CKD2nNx4lvCdk4olcGTqqfJ1WEWwt0HmSZsyKiMu/0y/eSzddGL7PYiJJAiIgCIiAIiIAiIgHzwYcX+JrcjYjxtfzmX0IksTxtnoEX0InopCSRJGzwIJ7ESAIiIAiIgCImD1VU2Jz5DNj2KMz3CAZwbAEkgAC5JNgANSSdBKvaOJxhW2Gw5D73xV2phN0HUIHL3OVgwFr555Sl2jsPauLAStUoU0FjuIXAJGhZbHePa1r8OM1nC329FKrXSMtse3NJLph1+lb7bXFMdls37rDkZx+M2ljMa4RmeoWPu00Fl4aIMsvtNpznWYT/ANO1BvVxBI5U0C/8mLek6rZmycNhlIpoE+0xN2bP6znM5nTTlOqVEfatsyauu+EVHsr7KphgKlXdatbX6tMWzCnna927hle8ftvhqj4R1Au9SpRRBoTesoUEcDfPv4WnSUSXyYWsdNN7kxHAdOYz0m6mFV2QsL7jhx8wBAPnfwkKn5bZfxSnSKbG7CRcPhcKvwI6BjzCIzux6sQe8zr8DRsAQOz95h9AGZb8Ax81185Z0k4+H7zaUY0yRRYWmURNTIREQBERAEREAREQBERAOCTTUntFj4WE9kzIF+JhfrYeU8VLi49CPWeQ5Z3eRFEkZDITSbi57goHoT5yNE7PHY8FJ7CtvM38pH/qV0JG9xVLuR3KL+UyOGTiN75yWHgxtPTURfduL8FXM9yjPygGSNcXsR26zKYjfOiHtYqB63HhMlw7n4n3eiWPizDPwEsopjZi7hRckAcybSt21tlcPTL7jvnYAIwW54s5WyjrLilhkU3Au32mJY9xOg6DKSsoIIIuDqDoZpOJLsht+xz3sltRcalQvdXRxdEYgbjC6Nce8cwwOdstJ0FOmqiyqFHJQB6Tj62AGz8XTxNMWw9RhTqoNEFRgAw5KG3T0tYa5do4sTNnMrrorLetPsxiIkFhMSgJBPDTp1tz6zKBAJEEscGk0aSy4wiZS8opbNmjSF79g/X9ZtSOmMu3Pxmc6UtI5W9s9iIkkCIiAIiIAiIgCIiAIiIBSf6MaAdwH7TE4Bjop8h6mXkTL+jJfzZzdbAOCBujMXHveIOWvZeaFWjUF/cW41Bc/wDRp1nYVEBFj/4mlXwt9cjwI0PT+JR4Z+C85H7nyf2trbRCMaDAKVO8qqC6qDqrHMjg2Vx47vTezmMSvh0qIAoK5qoA3WGTLlyMv8Ts7O9rNe4ZeY0Nh6ZjhNLA7Npozsi7jOQairkpb7YXgSOPHjmJDlJaSLTXO9gieWm09KRMkpo1TIonpE8kEmttDCrVptTYXVlII5gixkmFq76KbgtuqG+cCzX5G95LImp01O+bKdN69u4nj2QQZo1+BGZ16HWZTKnSdvhpu3+O6O277oPdJKmEqqN5giDnUqKo8RcS3jT9iPKfkhmSiV+J2miG1w/M0iWA72Cg9xM3MDiUqC6HQ2IIsQeREjxaLaetm/hkuRLVSBurxY27tT5TRw9lBZjYAZmZ4CoXqhiLAKSByGnjnNscnPkou4iJsYiIiAIiIAiIgCIiAIiIAiIgCIiAIiIBEaQ4Zdn7SCrhN7O4BGht5a5ibcSNInbKyrhuFs/7pNOrQl8yg6yu2gQgBsSCbZaj9+MpUfBeb+SndJERNr/UU3NlcE/ZOTfhOchdZhU6Oia2VrbRohirORumx3FLEnkpI3RbmTrlY52yG3qaZ0aA3vt1TdvAaDoGtITsenvM28/vEki4tmbnMC/HnJV2dSXRFJ4F7vbva5kqvHov4x7pv/hqVfaDE1clqG3Kgpy71BYd5muuBrud5lseLVHu3lvE95EtilQ/XAH3F/6rzOlQC53JPNiT4X0kO2yyvx+1JGjR2OPruT0QBQfU+BEtsFhqaLZQFXU/uScychrInqKouTl4kk6AAZk9BJ8MrMQzi3ELy6tbVvIddZC5KVTfbN6rRL0zlxXdHH4xmep8pbYfDhPwKvgWJ9ZBhtB2j8wlhOqejjvsRESxUREQBERAEREAREQBERAEREAREQBERAEREATV2hR30IGuo7RNqIBz219kKTSqKASllYEaqQVv2gt59JSVA6D3XI+DI+8LGw0OnHQidrivgbs9DORxy5P8p8mb+JnaNcbNQY9xkyb3vEXQ2NwCfhbICw+0Zmm0aRFy2784KjS/xEW06zWq5MT98eahf1mqiFhurm1tOR3CmZ4Cc+jfZbjF0v8A5E/Gv7zw4oH4PfP3T7o7X0HYLnpI8Lggp3mza9+i9g77X1m5IJIqVHPeY7zc7WCjko4dup56Ab1EzWk1MyUQ0XOFNwRLFWuAeYlRg3zlnSOVuXof6Z0w+Dmtck0REuUEREAREQBERAEREAREQBERAEREAREQBERAPImD1FGrAdpAmBxKDV18RA0eYw2Q93mQJy2LS9/8h3N/TL/F4hGFlYMBmd0gjoMuufdKmpaZZKNsclS+Fdjmd1emp7+Hdn1mzRoqgsot/dZK0xmDZukIiJBImaGYT0QDew7y3o1ND49koKbSxw1a01mtGNzsuYmkcWFHvd3XpNR8YSb73cDa032jJQ2XETTwmJ3sjrwPP+ZuSSrWno9ieT2CBERAEREAREQBERAEREA8iJrYvFKgudeAglLfCNmV+N2iqXAIvxPL+Zz+P21r72Qvck+nKc7VxtSsbIpPZovadAZR0bzh96OgxW3AL28TxmthsXUrn3cl4sdOwczNPB7Hv71Rt77ovu/u3kOku1IAsMgOUzqzXhdEyEIu6unXUnmTzkLtMS8xJmTeyEgZ5ESCwiIgCIiAZKZMjzXEyBkpkNG+KoZSrC4MpsfhKye9TJddbD4x0t9buz6TcDzNKxEsraIS0V2A2xpn/H8zqMNtQPbLlex8wLT5xtqpuYh7aPZx2tcN/wAgT3zbwO1CtjfT04zWbNLwK5VI+nCezntnbXuALgjkf0l1RxKtxseR/uc0T2cVRU9mxERJKCIiAIiIAiIgCIkGN/23+RvymAaOO2siA7tiefD+Zxm1tsMxPvZnjykO1a7XOc5zE1m5zKmenh9PJu/6oPURD8JdQRzF72nU0FByAAUcBkOy0+f4Zz9NS/8AtX1E+g4TQ9sypjPKVJfobJM8iJQyEREAREQBERAEExEAREQBEQ0A5H2t+JG+cflI9DKnD4kiWvtX8KfO35ZzqzRdHdgW4Oh2ftEqd2+mnZ/cp0uB2xzM+eUnO+PlHqZaYas3OXTKXiTPqGC2rfjfof0Mt6VUMMvDiJ8zwOJfnOx2BWZmNz9U+omkvZwZsSlbR0EREscoiIgCIiAf/9k="
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
          :name="5"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
          :name="6"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
          :name="7"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <q-carousel-slide
          :name="8"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>

    <div class="blogs">
      <h3 class="heading">Browse blogs</h3>
      <q-list>
        <q-item v-for="blog in blogs" :key="blog.id">
          <div class="blog-card">
            <div class="thumbnail">
              <img
                class="blog-img"
                :src="blog.blog_image"
              />
            </div>
            <div class="blog-data">
              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-large blog-title">{{
                    blog.blog_title
                  }}</span
                  ><br />
                  <span class="text-grey-8 blog-poster">
                    by {{ users[blog.user_id - 1].username }}
                  </span>
                </q-item-label>
                <q-separator />
                <br />
                <q-item-label caption lines="3">
                  <p class="blog-text">
                    {{ blog.blog_content }}
                  </p>
                </q-item-label>
                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <q-btn flat round color="primary" icon="fas fa-thumbs-up" /> |
                  <span class="cursor-pointer">Read more</span>
                </q-item-label>
              </q-item-section>
            </div>
          </div>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: 5000,
      blogs: [""],
      users: [""],
    };
  },
  created() {
    //implement async await
    this.handleGetBlogs();
    this.handleGetUsers();
  },
  methods: {
    handleGetBlogs() {
      const url = "http://localhost:3000/blogs";
      fetch(url, {
        //method: "GET", //get post put delete, default GET
        //body: JSON.stringify(), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //API response gets returned
          //console.log(json)
          this.blogs = json;
        });
    },
    handleGetUsers() {
      const url = "http://localhost:3000/users";
      fetch(url, {
        //method: "GET", //get post put delete, default GET
        //body: JSON.stringify(), //object containing data from vue from 2way data binding
        mode: "cors", //if FE and BE are on diffeent hosts/url
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //API response gets returned
          //console.log(json)
          this.users = json;
          //console.log(this.users)
        });
    },
    methods: {
      handleGetBlogs() {
        const url = "http://localhost:3000/blogs";
        fetch(url, {
            //method: "GET", //get post put delete, default GET
            //body: JSON.stringify(), //object containing data from vue from 2way data binding
            mode: "cors", //if FE and BE are on diffeent hosts/url
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => response.json())
          .then((json) => {
            //API response gets returned
            //console.log(json)
            this.blogs = json;
          });
      },
      handleGetUsers() {
        const url = "http://localhost:3000/users";
        fetch(url, {
            //method: "GET", //get post put delete, default GET
            //body: JSON.stringify(), //object containing data from vue from 2way data binding
            mode: "cors", //if FE and BE are on diffeent hosts/url
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => response.json())
          .then((json) => {
            this.users = json;
          });
      },
    },
  },
};

</script>

<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

.blog {
  display: grid;
}

.carousel {
  right: 10%;
  left: 10%;
}

.blog-img {
  max-width: 90%;
  max-height: 90%;
  margin: 0;
  padding: 0;
  border-radius: 5px;
}

.blog-card {
  margin-bottom: 1vh;
  background-color: rgba(14, 125, 252, 0.2);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 22px 70px 4px;
}

.blog-title {
  font-size: 19px;
  margin-bottom: 15px; 
}

.blog-poster {
  font-size: 15px;
}

.blog-text {
  font-size: 12px;
  margin-top: 15px; 
}

.blog-data {
  width: 85%;
}

.thumbnail {
  width: 15%;
}

.heading {
  text-align: center;
}
</style>