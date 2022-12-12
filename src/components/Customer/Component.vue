<template>
    <v-app>
        <v-container fluid style="height: 80px">
            <v-app-bar absolute dark src="https://picsum.photos/1920/1080?random">
                <template v-slot:img="{ props }">
                    <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
                </template>
                <v-avatar>
                    <img src="../../../public/img/icons/ms-icon-310x310.png">
                </v-avatar>
                CAUDEX
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-avatar color="#546E7A" size="35" class="ml-auto" v-on="on"
                            style="cursor: pointer"></v-avatar>
                    </template>
                    <v-list>
                        <p class="text-center mt-2 mb-4">Nama Pengguna</p>
                        <p class="text-center mb-2">Administrator</p>
                        <v-divider />
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-cog</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Settings</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
        </v-container>
        <v-spacer></v-spacer>
        <v-main>
            <router-view></router-view>
          </v-main>

        </v-app>


</template>

<!-- <script>
export default {
    data: () => ({
        user: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        },
    }),
}
</script> -->
 