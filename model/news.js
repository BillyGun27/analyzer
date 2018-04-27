const mongoose = require('./connect');
let Schema = mongoose.Schema;
var newsSchema = new Schema({
      thread: {
          uuid: String,
          url: String,
          site_full: String,
          site: String,
          site_section: String,
          site_categories: [],
          section_title: String,
          title: String,
          title_full: String,
          published: Date,
          replies_count: Number,
          participants_count: Number,
          site_type: String,
          country: String,
          spam_score: Number,
          main_image: String,
          performance_score: Number,
          domain_rank: Number,
          social: {
            facebook: {
              likes: Number,
              comments: Number,
              shares: Number
            },
             gplus: {
              shares: Number
            },
             pinterest: {
              shares: Number
            },
            linkedin: {
              shares: Number
            },
            stumbledupon: {
              shares: Number
            },
            vk: {
              shares: Number
            }
          }
        },
        uuid:String,
        url: String,
        ord_in_thread: Number,
        author: String,
        published: Date,
        title: String,
        text: String,
        highlightText: String,
        highlightTitle: String,
        language: String,
        external_links: [],
        entities: {
          persons: [],
          organizations: [],
          locations: []
        },
        rating: String,
        crawled: Date  
      });
//var Schema = mongoose.Schema
const News = mongoose.model('News', newsSchema );

module.exports = News;
/*
mod = {
    thread: {
        uuid: "bf07ae0345de7ae1c668ff846710e38b9eb4cd62",
        url: "http://omgili.com/ri/.wHSUbtEfZRoe4igfVASjxOEesmDZIukF5liGap63IPzKCgwc6aag5pg91GUo7XLfTNvp1DeGxlh3E4poYjpzOIiszz9yQ75oJ81ekxKCe48TRx2YV36imunfW29yTYWS..Kaqrd9CW_Ce2957PvYV4QZyDb.GYU",
        site_full: "celebrity.okezone.com",
        site: "okezone.com",
        site_section: "http://www.okezone.com/feed/",
        site_categories: [
          "movies",
          "celebrity_fan_gossip",
          "entertainment"
        ],
        section_title: "Sindikasi welcomepage.okezone.com",
        title: "Gonjiam Sukses Meneror Far East Film Festival di Italia",
        title_full: "Gonjiam Sukses Meneror Far East Film Festival di Italia",
        published: "2018-04-14T22:30:00.000+03:00",
        replies_count: 0,
        participants_count: 0,
        site_type: "news",
        country: "ID",
        spam_score: 0.0,
        main_image: "https://img.okezone.com/content/2018/04/14/206/1886732/gonjiam-sukses-meneror-far-east-film-festival-di-italia-L74Tyl8tkn.jpg",
        performance_score: 0,
        domain_rank: 574,
        social: {
          "facebook": {
            "likes": 4,
            "comments": 0,
            "shares": 4
          },
          "gplus": {
            "shares": 0
          },
          "pinterest": {
            "shares": 0
          },
          "linkedin": {
            "shares": 0
          },
          "stumbledupon": {
            "shares": 0
          },
          "vk": {
            "shares": 0
          }
        }
      },
      "uuid": "bf07ae0345de7ae1c668ff846710e38b9eb4cd62",
      "url": "http://omgili.com/ri/.wHSUbtEfZRoe4igfVASjxOEesmDZIukF5liGap63IPzKCgwc6aag5pg91GUo7XLfTNvp1DeGxlh3E4poYjpzOIiszz9yQ75oJ81ekxKCe48TRx2YV36imunfW29yTYWS..Kaqrd9CW_Ce2957PvYV4QZyDb.GYU",
      "ord_in_thread": 0,
      "author": "",
      "published": "2018-04-14T22:30:00.000+03:00",
      "title": "Gonjiam Sukses Meneror Far East Film Festival di Italia",
      "text": "Gonjiam Sukses Meneror Far East Film Festival di Italia Annisa,   Minggu 15 April 2018 02:30 WIB 0 Komentar \nSEOUL – Film horor Gonjiam : Haunted Asylum tampaknya tengah naik daun. Setelah menguasai b ox o ffice selama 2 pekan berturut-turut, film arahan Jeong Beom Sik itu diputar dalam ajang Far East Film Festival pada 20-28 April 2018, di Udine, Italia. \nSalah satu festival film bergengsi yang didedikasikan untuk film-film Asia itu telah melambungkan nama banyak sutradara Asia sejak tahun 1999. Sebelumnya, ada tiga film Korea yang sukses menembus Far East Film Festival. BERITA TERKAIT + \nBaca juga: Tak Terkalahkan, Teror Gonjiam Masih Mendominasi Box Office Korea \nDimulai dengan The Crucible pada 2012, dilanjutkan dengan The Attorney sekitar tahun 2014. Setahun kemudian, giliran Ode to My Father yang melenggang ke Italia, sebelum akhirnya tahun ini giliran Gonjiam . \nDiproduksi dengan bujet USD2,28 juta, Gonjiam berkisah tentang tujuh orang yang melakukan uji nyali di Rumah Sakit Jiwa Gonjiam. Rumah sakit yang terletak di kawasan Gwangju, Provinsi Gyeonggi itu bahkan masuk dalam daftar tujuh tempat teraneh di dunia versi CNN . \nMenariknya, Gonjiam diangkat dari kisah nyata yang terjadi pada 1979. Kasus bunuh diri yang melibatkan 42 pasien, membuat Rumah Sakit Jiwa Gonjiam ditutup permanen sekitar tahun 1996. Sejak itu, banyak cerita mistis yang menyelubungi rumah sakit tersebut. \nSejak dirilis pada 28 Maret 2018, Gonjiam sukses mengambil alih puncak box office dari Pacific Rim Uprising . Hingga 8 April 2018, film tersebut sukses menjual 2,24 juta tiket dengan pendapatan menyentuh USD16,72 juta. Badan Perfilman Korea mencatat, Gonjiam menembus angka 2 juta penonton hanya dalam waktu 11 hari. \nTeror Gonjiam dianggap sebagai tanda keberuntungan bagi genre horor Korea. Pasalnya, genre ini pernah mengalami masa suram sejak masa kejayaannya yang singkat di akhir tahun ‘90-an dan awal 2000-an. Pada periode tersebut, semua film bergenre horor membukukan penghasilan fantastis. \nBaca juga: Gonjiam: Haunted Asylum Depak Pacific Rim dari Puncak Box Office Korea \nA Tale of Two Sisters yang tayang pada 2003 misalnya, berhasil menggaet 3,15 juta penonton. Sementara The Phone yang rilis pada 2002, mengantongi 2,2 juta penonton. \nJangan pula lupakan seri Whispering Corridors yang dimulai pada 1998, dengan 2 juta penonton. Sementara seri ketiga film itu yang dirilis sekitar tahun 2003 berhasil mengumpulkan 1,78 juta penonton. \n(SIS)",
      "highlightText": "",
      "highlightTitle": "",
      "language": "malay",
      "external_links": [],
      "entities": {
        "persons": [],
        "organizations": [],
        "locations": []
      },
      "rating": null,
      "crawled": "2018-04-14T23:30:50.055+03:00"
} */
/*
ds=    {
      "thread": {
        "uuid": "bf07ae0345de7ae1c668ff846710e38b9eb4cd62",
        "url": "http://omgili.com/ri/.wHSUbtEfZRoe4igfVASjxOEesmDZIukF5liGap63IPzKCgwc6aag5pg91GUo7XLfTNvp1DeGxlh3E4poYjpzOIiszz9yQ75oJ81ekxKCe48TRx2YV36imunfW29yTYWS..Kaqrd9CW_Ce2957PvYV4QZyDb.GYU",
        "site_full": "celebrity.okezone.com",
        "site": "okezone.com",
        "site_section": "http://www.okezone.com/feed/",
        "site_categories": [
          "movies",
          "celebrity_fan_gossip",
          "entertainment"
        ],
        "section_title": "Sindikasi welcomepage.okezone.com",
        "title": "Gonjiam Sukses Meneror Far East Film Festival di Italia",
        "title_full": "Gonjiam Sukses Meneror Far East Film Festival di Italia",
        "published": "2018-04-14T22:30:00.000+03:00",
        "replies_count": 0,
        "participants_count": 0,
        "site_type": "news",
        "country": "ID",
        "spam_score": 0.0,
        "main_image": "https://img.okezone.com/content/2018/04/14/206/1886732/gonjiam-sukses-meneror-far-east-film-festival-di-italia-L74Tyl8tkn.jpg",
        "performance_score": 0,
        "domain_rank": 574,
        "social": {
          "facebook": {
            "likes": 4,
            "comments": 0,
            "shares": 4
          },
          "gplus": {
            "shares": 0
          },
          "pinterest": {
            "shares": 0
          },
          "linkedin": {
            "shares": 0
          },
          "stumbledupon": {
            "shares": 0
          },
          "vk": {
            "shares": 0
          }
        }
      },
      "uuid": "bf07ae0345de7ae1c668ff846710e38b9eb4cd62",
      "url": "http://omgili.com/ri/.wHSUbtEfZRoe4igfVASjxOEesmDZIukF5liGap63IPzKCgwc6aag5pg91GUo7XLfTNvp1DeGxlh3E4poYjpzOIiszz9yQ75oJ81ekxKCe48TRx2YV36imunfW29yTYWS..Kaqrd9CW_Ce2957PvYV4QZyDb.GYU",
      "ord_in_thread": 0,
      "author": "",
      "published": "2018-04-14T22:30:00.000+03:00",
      "title": "Gonjiam Sukses Meneror Far East Film Festival di Italia",
      "text": "Gonjiam Sukses Meneror Far East Film Festival di Italia Annisa,   Minggu 15 April 2018 02:30 WIB 0 Komentar \nSEOUL – Film horor Gonjiam : Haunted Asylum tampaknya tengah naik daun. Setelah menguasai b ox o ffice selama 2 pekan berturut-turut, film arahan Jeong Beom Sik itu diputar dalam ajang Far East Film Festival pada 20-28 April 2018, di Udine, Italia. \nSalah satu festival film bergengsi yang didedikasikan untuk film-film Asia itu telah melambungkan nama banyak sutradara Asia sejak tahun 1999. Sebelumnya, ada tiga film Korea yang sukses menembus Far East Film Festival. BERITA TERKAIT + \nBaca juga: Tak Terkalahkan, Teror Gonjiam Masih Mendominasi Box Office Korea \nDimulai dengan The Crucible pada 2012, dilanjutkan dengan The Attorney sekitar tahun 2014. Setahun kemudian, giliran Ode to My Father yang melenggang ke Italia, sebelum akhirnya tahun ini giliran Gonjiam . \nDiproduksi dengan bujet USD2,28 juta, Gonjiam berkisah tentang tujuh orang yang melakukan uji nyali di Rumah Sakit Jiwa Gonjiam. Rumah sakit yang terletak di kawasan Gwangju, Provinsi Gyeonggi itu bahkan masuk dalam daftar tujuh tempat teraneh di dunia versi CNN . \nMenariknya, Gonjiam diangkat dari kisah nyata yang terjadi pada 1979. Kasus bunuh diri yang melibatkan 42 pasien, membuat Rumah Sakit Jiwa Gonjiam ditutup permanen sekitar tahun 1996. Sejak itu, banyak cerita mistis yang menyelubungi rumah sakit tersebut. \nSejak dirilis pada 28 Maret 2018, Gonjiam sukses mengambil alih puncak box office dari Pacific Rim Uprising . Hingga 8 April 2018, film tersebut sukses menjual 2,24 juta tiket dengan pendapatan menyentuh USD16,72 juta. Badan Perfilman Korea mencatat, Gonjiam menembus angka 2 juta penonton hanya dalam waktu 11 hari. \nTeror Gonjiam dianggap sebagai tanda keberuntungan bagi genre horor Korea. Pasalnya, genre ini pernah mengalami masa suram sejak masa kejayaannya yang singkat di akhir tahun ‘90-an dan awal 2000-an. Pada periode tersebut, semua film bergenre horor membukukan penghasilan fantastis. \nBaca juga: Gonjiam: Haunted Asylum Depak Pacific Rim dari Puncak Box Office Korea \nA Tale of Two Sisters yang tayang pada 2003 misalnya, berhasil menggaet 3,15 juta penonton. Sementara The Phone yang rilis pada 2002, mengantongi 2,2 juta penonton. \nJangan pula lupakan seri Whispering Corridors yang dimulai pada 1998, dengan 2 juta penonton. Sementara seri ketiga film itu yang dirilis sekitar tahun 2003 berhasil mengumpulkan 1,78 juta penonton. \n(SIS)",
      "highlightText": "",
      "highlightTitle": "",
      "language": "malay",
      "external_links": [],
      "entities": {
        "persons": [],
        "organizations": [],
        "locations": []
      },
      "rating": null,
      "crawled": "2018-04-14T23:30:50.055+03:00"
    }
*/