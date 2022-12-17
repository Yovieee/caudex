<template>
  <v-navigation>
    <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <router-link to="/" class="logo">
                <h4>Cau<span>Dex</span></h4>
              </router-link>
              <ul class="nav">
                <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                <li class="scroll-to-section"><a href="#about">About Us</a></li>
                <li class="scroll-to-section"><a href="#blog">Blog</a></li>
                <li class="scroll-to-section"><a href="#portfolio">OutTeam</a></li>
                <v-btn class="main-red-button" rounded style="margin-right:10px;" color="#2196F3" dark
                  to="../login">Login</v-btn>
                <v-btn class="main-red-button" rounded color="#F44336" dark mt="6" to="../register">Register</v-btn>
              </ul>
              <a class='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <h6>Welcome to CauDex</h6>
                  <h2>We Make <em>Digital Book</em> <span>Easier</span> To Read</h2>
                  <p>“Books are the quietest and most constant of friends; they are the most accessible and wisest of
                    counselors, and the most patient of teachers.” <a rel="nofollow"
                      href="https://en.wikipedia.org/wiki/Charles_William_Eliot" target="_parent">by Charles William
                      Eliot </a>.</p>
                  <!-- <form id="search" action="#" method="GET">
                    <fieldset>
                      <input type="address" name="address" class="email" placeholder="Your website URL..."
                        autocomplete="on" required>
                    </fieldset>
                    <fieldset>
                      <button type="submit" class="main-button">Analyze Site</button>
                    </fieldset>
                  </form> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src="assets/images/banner-right-image.png" alt="team meeting">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="about-us section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <img src="assets/images/about-left-image.png" alt="person graphic">
            </div>
          </div>
          <div class="col-lg-8 align-self-center">
            <div class="services">
              <div class="row">

                <div class="col-lg-6">
                  <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <v-row>
                      <v-col cols="12" md="3">
                        <v-icon size="70" color="#FFFFFF">
                          mdi-book-open-blank-variant
                        </v-icon>
                      </v-col>
                      <v-col cols="12" md="9">
                        <div class="right-text">
                          <h4>E-Book</h4>
                          <p>you can read more than 1.000.0000 E-Books of various types</p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <v-row>
                      <v-col cols="12" md="3">
                        <v-icon size="70" color="#FFFFFF">
                          mdi-progress-check
                        </v-icon>
                      </v-col>
                      <v-col cols="12" md="9">
                        <div class="right-text">
                          <h4>Active</h4>
                          <p>Active 24 hours a day, 7 days a week</p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <v-row>
                      <v-col cols="12" md="3">
                        <v-icon size="70" color="#FFFFFF">
                          mdi-signal-off
                        </v-icon>
                      </v-col>
                      <v-col cols="12" md="9">
                        <div class="right-text">
                          <h4>Read when Offline</h4>
                          <p>you can read e-books when you are offline</p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <v-row>
                      <v-col cols="12" md="3">
                        <v-icon size="70" color="#FFFFFF">
                          mdi-cellphone-link
                        </v-icon>
                      </v-col>
                      <v-col cols="12" md="9">
                        <div class="right-text">
                          <h4>Multi Device</h4>
                          <p>Can be used on various devices</p>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="blog" class="our-blog section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
            <div class="section-heading">
              <h2>Check Out What Is <em>Trending</em> In Our Latest <span>News</span></h2>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
            <div class="top-dec">
              <img src="assets/images/blog-dec.png" alt="">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
            <div class="left-image">
              <a href="https://lib.uajy.ac.id/welcome/konten_web/93"><img src="assets/images/big-blog-thumb.jpg" alt="Workspace Desktop"></a>
              <div class="info">
                <div class="inner-content">
                  <ul>
                    <li><i class="fa fa-calendar"></i> 21 Oct 2022</li>
                    <li><i class="fa fa-users"></i> UAJY</li>
                    <li><i class="fa fa-folder"></i>Pelatihan</li>
                  </ul>
                  <a href="https://lib.uajy.ac.id/welcome/konten_web/93">
                    <h4>Pelatihan Literasi &amp; Informasi 2022</h4>
                  </a>
                  <p>Perpustakaan UAJY akan mengadakan Pelatihan Literasi Informasi bagi Mahasiswa Baru UAJY Tahun 2022 
                    Pelatihan ini akan dilaksanakan secara luring bertempat di Ruang Seminar Perpustakaan Lt.3...</p>
                  <div class="main-blue-button">
                    <a href="#">Discover More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
            <div class="right-list">
              <ul>
                <li>
                  <div class="left-content align-self-center">
                    <span><i class="fa fa-calendar"></i> 24 Nov 2022</span>
                    <a href="https://www.perpusnas.go.id/berita/komisi-x-drp-ri-dorong-perpusnas-pertajam-unsur-literasi-masyarakat">
                      <h4>Komisi X DRP RI   dorong Perpusnas</h4>
                    </a>
                    <p>Komisi X DRP RI Dorong Perpusnas Pertajam....</p>
                  </div>
                  <div class="right-image">
                    <a href="https://www.perpusnas.go.id/berita/komisi-x-drp-ri-dorong-perpusnas-pertajam-unsur-literasi-masyarakat"><img src="assets/images/blog-thumb-01.jpg" alt=""></a>
                  </div>
                </li>
                <li>
                  <div class="left-content align-self-center">
                    <span><i class="fa fa-calendar"></i> 14 Mar 2021</span>
                    <a href="https://lib.uajy.ac.id/welcome/konten_web/88">
                      <h4>Daftar Ebook Baru Fakultas Teknik Sipil UAJY </h4>
                    </a>
                    <p>
                      Nonlinear structural engineering : with unique theories and methods to solve effectively.....
                    </p>
                  </div>
                  <div class="right-image">
                    <a href="https://lib.uajy.ac.id/welcome/konten_web/88"><img src="assets/images/blog-thumb-01.jpg" alt=""></a>
                  </div>
                </li>
                <li>
                  <div class="left-content align-self-center">
                    <span><i class="fa fa-calendar"></i> 06 Mar 2021</span>
                    <a href="https://ejournal.perpusnas.go.id/">
                      <h4>E-JOURNAL PERPUSTAKAAN NASIONAL RI</h4>
                    </a>
                    <p>Website ini merupakan database jurnal dan majalah online yang diterbitkan oleh Perpustakaan...
                    </p>
                  </div>
                  <div class="right-image">
                    <a href="https://ejournal.perpusnas.go.id/"><img src="assets/images/blog-thumb-01.jpg" alt=""></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolio" class="our-portfolio section">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <h2>Present by <span>Our team</span></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <!-- <a href="#"> -->
          <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div class="hidden-content">
              <h4>Blasius Yonas Vikariandi</h4>
              <p>Data-data</p>
            </div>
            <div class="showed-content">
              <v-avatar size="100">
                <img src="@/assets/team/team (3).jpg">
              </v-avatar>
            </div>
          </div>
          <v-row>
            <v-col cols="9" md="4">
              <v-card-actions>
                <v-icon>mdi-github</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Github </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="10" md="4">
              <v-card-actions>
                <v-icon>mdi-linkedin</v-icon>
                <v-btn color="#F44336" text href="https://www.linkedin.com/in/byonas/">LinkedIn </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="10" md="2">
              <v-card-actions>
                <v-icon>mdi-instagram</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Ig </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
            <div class="hidden-content">
              <h4>Otniel Sadar Herianto Sitohang</h4>
              <p>a</p>
            </div>
            <div class="showed-content">
              <v-avatar size="100">
                <img src="@/assets/team/team (2).jpg">
              </v-avatar>
            </div>
          </div>
          <v-row>
            <v-col cols="9" md="4">
              <v-card-actions>
                <v-icon>mdi-github</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Github </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="10" md="4">
              <v-card-actions>
                <v-icon>mdi-linkedin</v-icon>
                <v-btn color="#F44336" text href="https://www.linkedin.com/in/byonas/">LinkedIn </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="9" md="3">
              <v-card-actions>
                <v-icon>mdi-instagram</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Ig </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="hidden-content">
              <h4>Rakai Anandhi Mahardhika</h4>
              <p>a</p>
            </div>
            <div class="showed-content">
              <v-avatar size="100">
                <img src="@/assets/team/team (4).jpg">
              </v-avatar>
            </div>
          </div>
          <v-row>
            <v-col cols="9" md="4">
              <v-card-actions>
                <v-icon>mdi-github</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Github </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="10" md="4">
              <v-card-actions>
                <v-icon>mdi-linkedin</v-icon>
                <v-btn color="#F44336" text href="https://www.linkedin.com/in/byonas/">LinkedIn </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="9" md="3">
              <v-card-actions>
                <v-icon>mdi-instagram</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Ig </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
            <div class="hidden-content">
              <h4>Stillman Flobert Butar-Butuar</h4>
              <p>Lorem</p>
            </div>
            <div class="showed-content">
              <v-avatar size="100">
                <img src="@/assets/team/team (1).jpg">
              </v-avatar>
            </div>
          </div>
          <v-row>
            <v-col cols="9" md="4">
              <v-card-actions>
                <v-icon>mdi-github</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Github </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="9" md="4">
              <v-card-actions>
                <v-icon>mdi-linkedin</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">LinkedIn </v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="9" md="4">
              <v-card-actions>
                <v-icon>mdi-instagram</v-icon>
                <v-btn color="#F44336" text href="https://github.com/Yovieee">Instagram </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>



    <!--Footer-->
    <v-footer>
      <v-container>
        <v-row>
          <v-spacer class="hidden-sm-and-right" />
          <v-col md="42">
            <div class="right">
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
  name: 'HomeView'
}
</script>