<template>
  <v-navigation>

    <!--Header-->
    <v-card>
      <v-app-bar absolute dark src="https://picsum.photos/1920/1080?random">
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
        </template>
        <v-avatar>
          <img src="@/assets/logo.png">
        </v-avatar>
        <!-- <a href="#/home">CAUDEX</a> -->
        <v-btn text to="../home">CAUDEX</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" style="margin-right:10px;" color="#43a047" to="../login">Login</v-btn>
        <v-btn class="ma-2" color="grey" mt="6" to="../register">Register</v-btn>
      </v-app-bar>
      <v-container style="height: 8vh;"></v-container>
    </v-card>
    <v-spacer></v-spacer>

    <!--Main-->
    <v-main>
      <v-card>
        <v-carousel hide-delimiters hide-controls>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-card>


      <!--Start Of Card-->
      <v-card>
        <v-card-tittle style="center"> sadas</v-card-tittle>
        <v-row>
          <!--Stock-->
          <v-col cols="12" md="3">
            <v-card class="mx-auto" color="#00BFA5" dark max-width="400">
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt=""
                    src="@/assets/e-book.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>E- Book</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <span class="subheading mr-2">10000000</span>
                  <span class="mr-1"></span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>

          <!--Active-->
          <v-col cols="12" md="3">
            <v-card class="mx-auto" color="#00E676" dark max-width="400">
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt=""
                  src="@/assets/active.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Active</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <span class="subheading mr-2">24 Hours</span>
                  <span class="mr-1"></span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>

          <!--Stock-->
          <v-col cols="12" md="3">
            <v-card class="mx-auto" color="#00E676" dark max-width="400">
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Stock</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-book-open
                  </v-icon>
                  <span class="subheading mr-2">10000000</span>
                  <span class="mr-1"></span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          </v-col>

          <!--Stock-->
          <v-col cols="12" md="3">
            <v-card class="mx-auto" color="#00B8D4" dark max-width="400">
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Stock</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1">
                    mdi-book-open
                  </v-icon>
                  <span class="subheading mr-2">10000000</span>
                  <span class="mr-1"></span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        </v-row>
      </v-card>
      <!--End Of Card-->

      <v-card>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
              <v-card-title>
                <v-icon large right> mdi-account </v-icon>
                <span class="text-h6 font-weight-light">Visitor </span>
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                invalid as well."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
              <v-card-title>
                <v-icon large right> mdi-account </v-icon>
                <span class="text-h6 font-weight-light">Visitor </span>
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                invalid as well."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
              <v-card-title>
                <v-icon large right> mdi-account </v-icon>
                <span class="text-h6 font-weight-light">Visitor </span>
              </v-card-title>
              <v-card-text class="text-h5 font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type
                invalid as well."
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>



    </v-main>

    <!--Footer-->
    <v-footer>
      <v-container>
        <v-row>
          <v-spacer class="hidden-sm-and-left" />
          <v-col md="auto">
            <div>
              &copy; 2022, made with
              <v-icon size="20">
                mdi-heart
              </v-icon>
              by Our Team for UAS.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

  </v-navigation>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>
  