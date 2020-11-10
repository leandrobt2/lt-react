'use strict';

class ImageHelper {

    sizes = [
        { typeId: 'portrait', size: 's', width: 300, height: 400, str: 'w300-h400' },
        { typeId: 'portrait', size: 'm', width: 500, height: 667, str: 'w500-h667' },
        { typeId: 'portrait', size: 'l', width: 1200, height: 1600, str: 'w1200-h1600' },
        { typeId: 'portrait', size: 'xl', width: 1200, height: 1600, str: 'w1600-h1066' },
        { typeId: 'landscape', size: 's', width: 700, height: 467, str: 'w700-h467' },
        { typeId: 'landscape', size: 'm', width: 1000, height: 667, str: 'w1000-h667' },
        { typeId: 'landscape', size: 'l', width: 1600, height: 1066, str: 'w1600-h1066' },
        { typeId: 'landscape', size: 'xl', width: 1800, height: 1200, str: 'w1800-h1200' }
    ];

    constructor() {
    }

    getRandonImages(limit, typeId = undefined, imageSize = undefined) {

        let size = this.internalImages.length;

        if (typeId != undefined) {
            size = this.internalImages.filter(m => m.typeId == typeId).length;
        }

        if (limit > size) {
            if (typeId != undefined)
                return this.replaceSize(this.internalImages.filter(m => m.typeId == typeId));
            else {
                return this.replaceSize(this.internalImages);
            }
        }
        else {

            let tempArray = this.internalImages;

            if (typeId != undefined)
                tempArray = tempArray.filter(m => m.typeId == typeId);


            let ret = [];
            let usedIndex = [];

            while (ret.length < limit) {

                var randonIndex = this.getRandomFrom0To100();
                if (!usedIndex.find(m => m == randonIndex)) {
                    if (randonIndex <= tempArray.length) {
                        let tempImage = tempArray[randonIndex];
                        if (tempImage) {
                            ret.push(tempImage);
                            usedIndex.push(randonIndex);
                        }
                    }
                }
            }

            return this.replaceSize(ret, imageSize);
        }
    }

    replaceSize(_images, size) {
        if (!Array.isArray(_images))
            _images = [_images];

        if (!size)
            size = 'l';

        var imgRet = _images.map(i => {
            if (i && i.url) {
                let a = this.sizes.find(m => m.typeId === i.typeId && m.size === size);
                i.url = i.url.replace('wxx-hxx', a.str);
                return Object.assign(i, i);
            }
        });

        return imgRet;
    }


    getRandomFrom0To100() {
        return Math.round(Math.random(1).toString().split('.')[1].substring(2, 4));
    }

    internalImages = [
        {
            "url": "https://lh3.googleusercontent.com/e9SygCHZCnozQuHfQ5pXAQnF0SAXzwE2EDRpAU3O76jU4U8kEkRSfrycI4qXfZZ6SY4lxFccc6qaskA-i4XJtMFn7uuesGUPAYD3pgnWuVVNwCwHKZHum2ZTFO0he834BddE2noZ7V9enLQn4qeC_KxqAH-wOXEFG77KgN2_Og657lDZqrYWQaU-SBAP1tjT9_TMhYgPmEWGRp4GM8zzxdRU6_E7SADhyXO4l9rm9nWLdFOsECtkthEzzuBIxCys96aCXSudW7IctpKw_I7CmrjI5McVI5X2-EcG7ewWruJmhVc5iXnoHDswZPsc8I2Ygw2C4OScfXZOMwxLyuDoTbzTZ0vTB8JBAQVd18AL6DLtSVMfqkKSZBBEvW43n4R72_qqXo9WDw-DKfyXaCYYPntp8Lzh0mQerrM3iHKt_EKkA9ByYPlr1Syk7lUBKXntDYRVcAb5Kz20Am4dnv6XpdGe42zoVJkTn80xHNPp42CsFpLHLiFzJBBQzjnGYRrFR1vkfymBKqsaGbQvVlDcvdEq9_C5jIcKoANL91w7NVNVso0AOYjsQebKhlxY_Nh2ue8-iQmATEM4MxBjatCAaAJt1YRy1LHAJ2yhr7VlGevsH2v1OeyH_9DjFg=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/SblAWUMboy9P4BpOwrsddPtsTtrAJqPdCZaAiF7nCALhMloV-EUwX8_E-DOFK_ASFf5sojN-v9qZn6ftoNmvGm1jPqavXAWXlJZLQO4zNnVLrUqMErDD57VlZzLuZ21b_pj30xnueIRifITs0JMaOeMQ5CgbxmNDGzofiB1GXlqOUeakqyPcvaLfIJbvZmm4PPYH9YjX4fKh796NduimXLHXT0BOoTx0x9xARvnAA5vZOgQ8_qA2epApduEmfANoSns5osvWFdjg8CtAZwFRxNQBm5ReK_2I4LkPmBhbSnFoLRU8iZAo8kD0lEaugFYxlCjnXM2jh0Vt3-_VTvKbqBAceNL8gD_ueqXe_eW6FWp9CccMBeky2WjQC7OvOxFONuFWmojPBtpgagPS15HiKlZb8s-lDV0liLjb5sD-RU-Hy01n5R4ERJ8cWdY9242SU-MWeKuPAsynDQmqdcEn-k0ZzNFF_TYJZGQRaPVGeQ2st_9oQEBsOCWEEo6IrWPAKLwncbHah81hM3exl6SAAA76WEIGKfZUfGNgRha8Ww2Fjwh_Pk0Wg_S4H7VCJAx6dXmI6VOgTqORl2BUrS4TtCYZSAjJGtfnaxTmJfLbK1OwDj4ASLXAn9MkvQ=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/g_l8nR18eaMuxrX7c_PgbI3r0dX0PKDkX0j-mmcz5hKBYMQStBfb74D9Wa2ua375v0LYt-a-kZMk8db2C55H6YkpDlGWkVgMc7ufDpSwQalNbdgkKoJ7Q7MAF8aRoyf6bQmoVhzYQRJIJ0tKg3mwnOaJ6Erfowy06Qma86qT-fOkuGvvGIOg5_PfhswV3fheVjZcWHMdY40I_P-3k6x5Xi5VVwUmOw550OhEws5MTm6BZbNQi8MeR5ecDkiSW0IJENnn-HX1WDR5K8pHm4MEE-37tCujvcDBkekagia3cvNMLXCKQ7MqJq4NGfRqzux6C2gG1_byDe9gcNDZ-kcG6gdSY-SCqdegxEaoEvlYiS1xiI4IlZY1W0I-v_83GUJq0YBzhATqBpqFzLWaArcBV942CPOOB1i-D5okJ0_R4QnxE3PrfSTZrTPPhk_AOxHl1GFgtJGybnYNTar_UjRNxCWJiUllGDYTWudSzPZZO1lL9FcMO5l_Rv13qFfec91XhyivGWf7tqz11rIdSePDok26QNu_lsrIS0udQqyPRnsjYkdzGPInHaYT5tzN8acleoL1eAoAYXDmbXL4--Y5EUSdemr9j-1N8wQDJR-kganeI_WbkgolCC_0BA=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/smAkRnrk2PSKiyufaA7PNgFj5aJkj5_d3nJKiVFfvlFGUgxXftsUFkUAWNSZIucihLsuhPe4DjUctdn72AJKKCELbf-3oLhkb8cPVaAAgSTp9msP7FmW1iwmN5dB1dG1BNr7g4m4MYyDs6fTRL7homfcfkVEAyevyLHWz0IFNBIDfwCucpr1fhQtCU4MzDheAv-d_uFBhaNRFmJJX0Ue0EFKnei3baIKyuw9j3jl299rKFYcR2L9SqKjUHPHxOimdsmV-JyUcQUP-IE80NUEE6q-eTMH-wDVE71OFDS1SYR-B8BnUTIDEMmNNfEMuOiW9nD1FeuhaIjpo2QbHRrIkQZ1pfiV3mlfL-lJfY5heAJ3zUO17HqAa9jSiV6uG6B9uxUI9WWif5z5laSN8H03wtdZcy8tewT1eTl6g9wGDjYyuyBuVXWb6LIw3oaf4yJdqTt6ZU112FG_q7hDORGmqhbMuAobPjet1oWDoGEAvbYqe-ZkNXsQL2mrQqLI_SEm0FGQ9kz9pInii4-Jta6jGVpK10v8twQKxWIk6Xbbhvwz9vM7YAtqH79987w-gJ6yRpoBGuZxgXiUlrJRJU340dqPNDbMitp3waGraVUVaSzcp7pZmARQJvTjag=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/DAQA4fIRqp_3zZ9cfgz5YWjm4uHKlPQmo8Y9vwwiqDGIXK4UMTA_8UrmeoBEFVvn_XoFNvEC83CzaFKj3oSZcw9_lLCyxy_VIhKLEhcUSzROHjWctTrbEuo5n9ckB0jsy-j3ONq2r38eyCk_FvQpRKvtlNYR_ixVOyByDNDV2KnoIfVvIRLd8wNXtPZbzhg4IBOUyIimfqJhf8Pin-EmrexBr8VcAtT87zSCHGp7sWgbZm_O-3x2EYAJ4TLm447Dud8ZMuTl1_Lf-mLkmf4voIbq0h5bdLOuvCza-cK0nRPw_iSy8fkwzkQh1EEeEMQ_LgUxpLUWit0HmBSh5g68oFk1RCrQQnQby6ajj51s4A5th_AwBmkfqYcyNIFyEM46-3tFD_Osvau_S8e1l6RD1Ok9QRDxbZhUzpWooPLyOCkzYpsLYY_h6wq3OnkaC5uj06z6EajNg1r-KMUeYFU8OsWaSjCUCnEObLcXfoIkbVYJcXP58O-qjQfi_fW6LteB1juVEOGc_wvV-aRP-vv573RvQ8bnAK3Jdbrx3T4TjecwP_T2peLdle-8gbeFh1Xd1ssWXTyOOWjH8ZDvN06nyq2wUwMTV4PO-SIvwKCZIt1HeiBg_DjogEMF1w=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/xVIHaPFX09O1gG9GTbXyhfFV9S1rFI9z3LlGXnKon-t9dQY8XXkSkci_7M6GkcC0u4OfqgbGvuh1SyI2ShGGCeWcWxcJOJ3luMv12aap9j3pktvyQJW5x1KsrtzKlcg7kcb4Q54HLQh-2mHfBPJuRdmPERMh2ceohGe-i-2kPp09nP6-SlmKvlm3MZaLs1T9rkNjjHOSX3DjypQmmevMd8F5gGWtYZwLEsuSLXpZFDFbczlsVmeBx11fMm1jByDZm-QlBj9jXzNzZGlTFMBZ0-hdsH0qnPZCkny2w6MpOSYzw6uHxGHH7Xas9Z23ZhD0XIcffiKdTkuNgzFl9mDXE2QwcP4HaR_JyDaPnqskK8WSu5X3NVOHagLv7sXEBRDTKwT-RMF9OHQZ93SgbMlLQam3vKrKmk3PTmBukl2DoGRupOpAW0tsPseVuIEhbLGCN9SBFiGSbVo8qE0FRIeA-5bU96Bvz7Gw43OJgP1-iicxhCoZXVr_goVnO4NW3W9pjNbeEAiefW_nqlQg3DR2ivKaeUUzqgcadWPx5X-cmfOhSdrACOyvaHfVJHIScrxIMJfR89G7BaB5Qc_EqO9dniELrmOCYkBVdncOkKkfp7-FAzViqgsqMNMMeA=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/kM294DahNU6R3i4CE_1cuilKPAQlkRjHaj4kZxtxf3v3pwG01x6WjPSonWcjldPM4nDwwvQlgkS98eKW2C-rf6enXZEia6BJoxcI9_5SkLeHSk4LEuFfDYo8FLnY2mwDviIS_ZwcdQYTyJgEStMXL4S6lcU0iLrysC9_sh-mA75ZUJVUW-2LnoXPa2ibBB328y0gpiywjeG27vV8Sv0U-r4A6wWRX970Mavmrrh6XmZJFdCFJz5dyjvZzvvM8XzudfbXXRXeqjqX3XQXpzLx_PNlzIo5f-rSxM6Fyxwv8lm3J5Qed2jI6-is03_jIwTuHmR2GIljCfHHrZsZFkIDOTnBoNxqen4RlkzvGb27tw0dDfNADbi3JKMIZnCjcp7zn1pXERI-bV6OlBAxKeKt_MqLc3Hl1bSsPJ6xvUzE9awS6Posia3FGllKwFNcNu2f5oRsytbhjkqWcS3qW5yN2gHjc67d2Iml3GpNj8Xaie73QJDF5K7Vca9RYyPmkLkXHCo2Uzk_7KS6STvGXIS1pzPszoY4j4vl2aY9AzRokJYQRQ65r3QQaOEVpdQDgeh9HZB_Ad1EJNgi68Ov117zg2O4T1ssTY5b8mAWlH4VkJTPHns9PzN_OHC3Uw=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/2ho086PMrnwSIDeHS-nTAjZB3k8wMhlIZaq_mznjcjuCpS654l5RCWzp5x3zZ2-3jn3cFhZYU0evObXKa3s8tqGEVc6BKgN9Kj8hxLpJ9BwfYmuvC9h5OMozSko6bsMYXfCF7i3JTWdHTuJbjd4zPtalUL6MNhgpHqnQOgUfvrf7Ap37JHAjCN1kTPPtqLbmZJIn67PMZxVF9jCr40hGe4QFaRewhh3L97UpQEbgz3OFCWks_4VwcXRy-teNqSgCtSqD6qtu4V8wVhjDuBH-5krrWSr5GOWD0KRL8QAkndGAH8pbqZ2bZrQ4-_vrsriH4HaiB2HD9z3-dhn4VSf6-hubVUWkaX1CMckrIea5huiNRnTEA-0412F1Nw-I7Y1_k62SijSE1X8LrE_c21t9LilepTe7m2mcCFlkeTf44pkrY9wcbTqLUEVs-RPXxQscZmwU3Ti3BdlEkCQXpf_qbJB3RnsgbG7qFHcot04r5-ScZzs2c9LOoIEUkmlwTXm7iZ4xv5YrAhhGe5dv6oPpocMJ6YT35sYWuNG_GgSdNpTwhXkH6-DHdrhys7pnkj79irTR3sODQmBnDG6JUAp9IfYnt8-HiurG70scmP8CrsmToW0Di-BH9P7sNg=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/88TPpArm52L-tZ0lddDoSWDSgmGvfzlvIbnqSVvCtHBTcX3ORZ-KHSIdEFOrUXhwejGiXV8x_QVyb4vJ9lEteAxaWjrmKQS6vbZq4K2h3wYg89fFWCgt6Qxy8RBeSm6J6-JdxDl2L_t_zwSoIYOjmSJpLAmnIqaamNtvofWI8DOALbLL8PX1XllZUlxOMA9Pb3j8WZ-84yBISE1JEuE9e-6JE2S5f91IybUgbQEeVxFdN5oYDbw4hiq19aYhbLFNOzuzAthzeYJ2vdfqWa9vi4T0WmG-J9_12-o8KSCsmjxBIOPtXth7y5zCOMg22HV64wRRwl4xVzlBnmsNowIYigK0LxTCqvsZEcMztJh19YGrBySMJQRRaGTS9Pf-RfSAqiyZeaTyBtj9YH-s1zRv-Mr_yx96Ht5WD7cLOOPA9CqzBlh4BBayavVjSCKockdei6yy0B9KnSw1u_uAz1cZ8VfrKf0u5dFQKDq_pXrcS4PFmbc3kGU0K8CLnqQEdrxCSpgRv9mUvtcaKihbozV6mZMX15Xox_95XCQ5L-WExfMje-gieisFcDgvzb2LZ36hfpPEWMaOrIrCK01-6hmmj6zUW2J3psgCpB6cFaiC0tAflq7flV-xLYWXjw=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/UbUAUWbiGt8t-6aIj2DM2gHpnIQWlxMwSyUpyvXq9bFjFGbRIdLXpIgnHo-UMIu2JNUVM0H_L0tiUigDd2V4IAqxud3W3kUddzW1e6pibvVCrR_pcUekjm2BWgIm73Fel6RxuPbsI320R0dfwsuuX8IrCWi4GN6PhJrh8UOk5atT7L1nAK_qps8Pv_c3RJ1Pp1QRpN_epsprTuHcS3iuo2pRLmNfIlNHmsOd_T1TlZ-RAY-VpKNH2bG7ldpf5TxMqxmuHx_PPr75zCBfs0QwhKHbQQtJVPc-AQ5WRkg95tZW0uKSXOHoGyVIBJjEYVPAC09-MBN6gI-nw3cxnKkY2SOTTHuGJCHT3nbBekaB_WjMAcfd2VFK86cN5WXv3_L69CpG7_J2aRzKzQoMg1vOmz9xEuGOjtMHID1QL5W-9ljaV_bNOkISrZQmNLbuJLXRVC6uhSOEoSurGafp28vlUS1fUGOQxmwEqjER6g8kc8PXiDSp2exriXJHI5jQsrraOvZwZqLJFOLWVpYkJFYaUh7vdeZSdbhQxB842rJOYMcwSqZQr5xqNzszla6fq4KNwGfVCVIUg0nEPCcH534BVX0MseBQlhYytkNEoMuV459FRTe4c8eORyTpyA=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/35d8rFZpWO0njvD_96iH6Pe8ZdEEPtKxM2rqxmLRT_MWGpuTgHJSflNpJX_GbleL-2MV358XEo6b4f-cx1gpg2-FnLEUT2dQYIoGf0MPEZiVt156vsrY6S22P1XL4aZWRPc9-p2fa_BFyP519Y9TjOjXkeC2u0WbYsBhrHlTv6Tb_GUdqWjhmTvId0DFQBucpzV-SenMesMzBYd2sJJXOSb-SUS0jMORn6bwB1spLri9WdOcNFGQlAm0emzbsjSMCaS3eQPBFxXN4gG1WDImjxpI4xLV9ZkdxrRuebCSbuMw8hD5K5VrGP7tNgC6J7sL0WeKzvARy4EXdRG8xrOe8H6E3nuWaS5yk7ZICYPZP_gCFhVtkFP5ejSsNUCWPpMJKnEjX82GrP-ll6513JUxA5FJnb5m12EhbvjkbJmX-CWFMQwOcLWT5NG3Z5Hm1uVP_0Yf5Gzlz05WLqv2xLilFmop2rkfj3QuNZFnYA49fac-XCXRgRNmC_b6VCBwwIBb04qfV04zG5o8mYUpC2gDpH_MaubW4QWM9RKYHzOPlKqPEY3v7PxKskDzmvJtVETSLgCDp8IoRLrTszc5tYd6Up_GURsF_wSm8m934u5STPIPkYK8volBl0R78g=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/nZ7mh-tW57P0IKuFsd1f63fT2bah1ifFKJsehKZ9LAytioH6iahW2uEVkSHwh2wByhKm_dgHU7eE8sNa8-kOv0jSEts7O6Hv5N0oYQdyLYr7bqRlieBRqampTVX00NS-VOhK33hzHaIEeV3U7Ygr0cZJNjeRP21jf07OqTiDVpOZnDL8PFU-Swid9Bq1MGmoONbZFjf31EBka57Mq90-dLapAR4FS9pHeqbYczBZQ7JLp2x-2GKqZ__-6QLo91Xv6qp0YGsq8kNiZ77wqf0zP-d1McyaJMgo_JbybrT2epdNubhYgsiKri3rXTTCYWSDmk6HcIneVcynh_YhKTJncFm7dOjHa4eSpRiYenBpQagfMMWz6XW0nxBRdyFoiisGAdqZr5aPHVOZZFwAqBYLF1o8F1YjC6LF4K-1a4d0OAvobB_43GokHVhPPwX2k8nUo5jMz62r1R5wE6njxQq_QFeFXCST93eep7jPXWto2jr-mBWELGrgerLs4JKHBkHPQLTvdf327hMx7SSmtFmsfn6Oz3-O6qBhQpoWtuITUsDxqiTlViTrwlIaOtE5HAakEk4GS0jroc56mV02tPhyl5H57UzM-h0Kd55WJQBD5dUgDLN3-4bmTg9LLg=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/fHfNWEpX1UzNS8dSXZ6wrLRLouNbh5Gj-dZ5S7a6y-XkB7XvTC3ue8xOqqHgr22uaRL0SvX3czAfNPBQJHop_PrsD5PRG0uPzTMLddwt9VlXD-JUM76ckjcJ4Yrm9CqdUeH6AYvila8iPr4SQkw2O2gh-lvG_vkpAWVBEu5fnsc6dDnk3kvOYyyHt3gkdFzacTQukzCKaPb52qgbfO_Rac8J29FGFj15uI0-Aq5JHk8TPZWEKLS0JGTSffi06wnlGaDbVM0v5D50S_iM6JfAOQw5PMuPrqVPHAIllvrRrDVkBLWNeharkinoQN9uanGtc3If1awCHPsvxc4lUzU7Cf1Wb39P5fn5avPFdW2evEHbWy1p7T-nrbDjnLVVDBixNeEFdU6DJbKO0pHrCYOGBt4v5y_G_NPljv-lKUukWyx-d3IJ4qFywFqF7qnQGP_trvN-6Ufuq7oSTa1M-6A1BFG6P22uk7Df54qMenLoY_uC9765kzBOJjOoaJndYa8migCTREaljADO0EVYEgTM9muWK21CBX_3TsRxAhrsoH-7mu7yitRGiYNlogfPK_k0QvRKrhZcohVH7QSALy7e3g316_ABv3WjPR6dG3I5N0Y2Lbc4oOJaU5vVBQ=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/ia_1_eCQzMfXwTl3seDi96CouKe2Dw3YJ3K2xoRiFNKFCECxaIY5jzeb1BE6Sfp5HCDw1u1M0kspeWd0eNSfP6U5U2tr5B9Wq6GlsLhZgmscqkiTl7ohw-_Cpo-H3BoswIl4-C5AbkCIcvHPHsTzenZn7yrGhVJxXwrKA8J6KMiqt8i2efN7MW490H8MOwS0CWX9e0nTwniqDpOiTyjfZtAvadv_CawjLrUyuajeCf4FHBOb0E0WkeizF0ob0A_5fKdUKKI160UerkH7iSAOlWo8q7J3S94okX539E1kXFCEfzunJ0bgqOsuPr3Tvk8ftejfPXsRkSRanoII_F-EaxaF0ZQQJ_oVMTUjlJiUWGF9rVBzqpa1AbNldB-b1Myxkd4TWCG6nGSK55dqR1_E0YqlqoJdIEOVQkqW14g4kcYLRObJaLw_dvUZ63DK34yzgEITqz1O3AODu82WRzBM3je9W3OUv9tFzv-2cy_mFnCVSfv6Y-xaX66nDfbgHiUBzMspX-wwOpGGZfpomrxK4QrkQXv8at8UVDjz-p49DSiCXmy09Ep6tjAphgrQFOhj-MlsZzwkxlccj9MQu8m6vUgDy3Pz-dvdYw8t-hL2fiZK0nCwsUeXp7p_Eg=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/rrubcy6t1RE4tifNch_z-QLWnrGQlqBnWskBLlVqx617pHHxiKet0UkE2ANF52eJD-7oQRd2a3GFvToYpIiawQm7bBb0q98_3sP11yJP2pqzjSFF9yH-WsvRSKO1HirLfzsCt31ihqDCoPlcNVcClRNZHj64GtYkmF05fraa8-3KCkK3ItWLnRYD2dWA-eRD0pIKjKwlojPcIYIwjIf9ycAclhQ_R6Ko0FUeF-f2r18kLI2L-Xh330D5_F0UO4CRVEG8rHkf7Y5q_DiCmBLkLMMFjkIhouqQu_QrC9x2dmxTEX2Iy1W4zODVbuMZ8wL3zM171KvONOcKDvViKnVofAT-DyMFHMVn02WLLjHzo4kWRbgl7FJTIsfzFUTKTlhqfs8jR30BolYn9xd0DIe6C_OYYq6-AZv1lcRzaj1wRbW-NK-v_O7Bo1biUgzpTz79Eq7R5IdGBET1bPb6lLanaWZ3aM389THjVBqD3T5nSNcSsFM2QbO37nDpGUtMiqYXDyDNTvftCdsugJe_6wt7lIep8Y8G_HbNHmDFkJTiLMzaILiZZcpRcm8K4DW_MAJMohafhhJRvQcVDbdt_DzYB6qHaXMQCqxPMf7oq17r99crgpvGR8GVat4hZQ=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/hbQgE6J-9XtbGXYu0aFJXzOn7z0TGgCRPOXmIXxpYGvZ74Vfzj_SIaG0CstSM8zpRaXhUscfOWXrtA-X-8ZMtOThKd12xzxcvj2s7lIYJKtWrMp3vGmbUjRKMlGYF5n1GXu--Nsh4OAkcU4Ya72srKYlzae-714vBddPX-g4xoPNA97nRldp4Pm8mCFrhuQ2MjH6J6WbaIBT_kfImrVUJUjisO9m5TQsJRgD_Anqi-WYb_eEremxyeYq5AIGohHyYMqHLWYmvTyvMqJqg0kK5bUy3z9v-PmOb1UGLORLfdXR-4QQkw5lROKM_Fat6qtfLg22jbbqh8OMAmGKrH-NCydGuavzLNHEFM3frB6iDCHl1oYI8tmMhQO6GijaximLB6Xe_48PVNYWf6LjulNLnc9R7_Vv83nBhM6QBT2FwwOcWORvT72vsS3AEozjOSaxxi1WXYc4wAlDxtFL5mxPYgLC__8i5PRCb5Cte169mpRG3JCkl7dBZmYSXrFLjH7DIj_tipwN4UczEdLvOW-kzNvqHFL4AKkPmM_gipyCE6eZ1go-PVJkyAm320p_TV6BzdfZTN_zPFtshl9hvw-eerNdMiTCvwtgaysLP8zYm2-YpzjaWLMzpbXSdg=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/60aY-QjDJSbxOC-S-FZRbBAcUIM4lKAB9tWg6KT27KQQJg-5-3RPxahEE9e5aRbB-w3ZtqipwP8WEzNwGy3hAWhxqcR5TUXg6z0tVhB4_FudyHsF0chLbA_EToMp7-_szHmuq5_IRnA57nsKc0iiVpa5cvyQOr3q4vgQcEA5F6M7PeVXe7CJ9G-xgQjFPQNSDYwM0XHfdaZQTlsVO1zPFrZSfgCKPLnZL2eIm-UecO24naVDWBhBxjK1IIFKTCUHbPFBLPV6oXHiDidTBwLk4LL9sjLzo7KEP0m2f9kRVQiCtxtGo9sjnlF5VsCgsffawfwL2Umbq3QroC7_LYg63wetrDfRhMTrQgDUJKQ2kA2_3CDk2zD7fSUKHKBAvZoNnkdFp34C9js0fGjI74GTcUg3c84tbAX7f4sF2jOPt6OSWf_OmunVzcx82e2s73ZL1MvV_fjut1vvuG12jbnZ2oxU27GOP6aZaJmOZ66jU0xnY8rp_cOu-edeSIFsda6V39PyTuc4zZ1oqkwWeZGHuy0kJXoUBlnyBD00LnXYX5SciTRriwMnWvH9o4HRwsYRn4vr5bTtvYgLTHkbAkWFHuaVAH6a7jiw5X4mvt3_cv8gxah3zgXgYIEtNw=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/nuSd3-GADkx0EunPcMm810uvZmCcFh1h-C7MEdkALtdarC04fNGGisLLOtFrkKomOq1KD_fEaw2J3ibsAldVu0RKRaVikWKoQ4qudakJTaIJ-GX6IBnSFDjKtigEsjBpZwJvcPpjFLvkvzl-iqreitYQXUnvjeRvBPYCr2i57RAB6kXG-R4gHeONQwlEv81VYLx_TmAy0qfi9l7ryq5hMo_AqJhP5K4-UE-Kpp5S1RXxSfSt7d00CYfZ1Jljnp9AuoQuNCEuGRJbxKR-iQi_RqSXVSXhGkMC_azqgJJLdj8kQqTMElBTyQxXhxR2XtBk4Pqvqzq6xtvFyn9k83l1uhdKCUSDSoq7dzfU3SPpSPb4RRmOqhpRcY-zNItiJmwMIHssLpwSneclUExQ3ognJcsFEvpzzUhpqfxFvWrwh4txPeM2uVV_Si4iFIPuocvDp6LfqiZ2dPO165haSuuSAWwYeDYHl0VgeoMQ0MkU_VZzTPnsgy-pQ-elUoPQW8I8isMd_XHXc_H2NmHFcTD_EK5NlXLXQpTONCERFnM7N2YuYEFXutAnMc3UPtKQpsWvJqn9T2YUvnPNb_ydD8lcmM5atDhiM-_XmRh_pPGtx859oV1CO3-QijGI3Q=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/nNoyZfI8OeMnYP_nq62pxu9a-83DrNtYNi61P5GPJnFEAzif2QEJOPHJc9xSI6xpwZeqnHTgf1RQioeEwY6MJnG9Dzb93MgRZTpy9NsDNQgIjAunwV68dEVYmDeQzY2VHGl9u5zsSCRy--aaMv9FwlGFU4hi7wawpHn4CNCmsLE0ra-xA6V-CzkTrU_VYHb7NCOCttVi9Nv5qWvKNO4_UzJDZij2QpqGpBNAQj3oGmDJY2v1yimNzvxY_hjo5X4AG0y9KrROuJKnL4ErAbMf9py83Hp5JpBl4CDn7E49qi1tBz0NMszHBYM8wNznAvI6PUspzaDHS2lfMx62mza6QAlGU3b1j6TVY8o2dlbWscg3-sgDPwF3o2oVkA-8j4GkQSYVV4NumFta_sJzDo1as-KTvTjM3XEDVSBgj07-RLsqDtM3WEBIYGErBAHsUIxVlx0-JNUPFbAxtXeDx_3HnYImuJPxBeIdmkND6sXml_PrCJTeKLWXGsyORRKDInGJdKT5tWKUcUbkSd0LBpfWx2Yh64MInNc4qWCHK8ZVBdDzWhACiUq0BOoLCIlHsb7RDnDWPY04pII15iPI5u4LIAO0ez8eS7dV4y73DFE8ZzYp-JjHpPZ3rxF-Xg=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/EfKnWDbb1nNWM7m1X9bg5-rBMokMn06-GkucQF9eGadCWE5m--AN8JReWWVvjLMLgQJR2kpt27TSaArb0A5L1lte8ZOiMa_gEchkYACK5J9kOo98JGGB44Np7iT-F2loAeMwFzxHtzEHePBWtJmHcTsoQTmAJfiQM-TIPOHrYtKxoDWAEPtco-1eWM2Uop9s5evFbbwffq3V2cYNzyoO7yrCRRyh_dgq6YwEQY4bo_VNaV2dVIjyBAYp852U9KWxfRgpPWYy1XdVytxgQnFsNQvfloXqBBMq0BRnmPtpB1cQhDI9xSs8KkxevTT4-s6J7_sSGfdGqf7j7ENP4sZFTWtWUxShYw7AMBcsHXstR4RfLMl99UeQggwWTr084F4O4rG4Wx5Ox7_79-uwFKxJ3p3Sf6LuifNZOqe__X6HQlwu8f2NvH6M6XWMy-UjK2ov-pXKN6bObcwOXC_tzASMII7mXvm3f6TvdDXJM7JuYVUksyDJktcgwTpUkrKwjZgKG07RQpAid1NxBgzc_0anLJA_RNOFDLyNndGwQFQQvKh6nEo6b1DU2Fe9uLKW9xjRZkb6t8jJMOxFiF7Rain5ussu3daV9UnS7sEMRDCUpVfHhHtQyOrdiytxxA=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/ppSPfMtFKRXOgaBtQh0q60MWVDUjwBMbgxqw9LN2qTSmVFE1J5NcFKr98j8OvugdhwdWI-RkbUrIzLOj8CmTQRZwQ-7hJmntZ-8-IgA0Vaomrq9SyytgM14btOLtGJqfzyU4wAp0i8h7MNBGGemIlDIJrnsdQGR6qMawV4RT6Dx1ANOT8hpzYegphQcdW8IWfflSdzVl_6KEHLjsgQNVFDqPXMLfOEBIZYIHTsJZiSmeOZzGVL3r-42xA4C4cPUqkF9IEXCnVW08YjHtLr2KCABVzFSB7efRL_auaVo84nla2yvtcZbogYgch7yiHVhW0XtD98MovBdDJuJGJQpE4redXDl0jz5I3M4Shp8ELpYkp13vthdY6KNRc7z4dJIi-nHh7yo3At-MC9tXm9kYW_AMwsjxukSMESxj_ZVwFvVVfKq6hsV8stn80iSRqbCXGBzJQ7gwqD0619AnQDCmqErnnsGy5c1bctdA6kscytHlgFYigy1ebL0lnv_1i_xp4ZPUV2IRWHJR7cc-_FquPPidf-8tFt0zR5MuwNF4wb0ff49M7bq2t56y65FYjR4NShmhpWDfQS8MixnRJyFeqS9xJplL4BHFQd9jFuOPli3yt8b5BJWDLV253g=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/hvwoTYhy0JHz43NTiG8UCIHAswBasoWwW-Ov0bnenpn3pMyIoK8nJThkrBAOmsI6z6aWisyCWYShzuxPmEM5hkdIPZkFTi4N5Jawb6N4RmCSnxtTLx7qKNnap26nVlXmNsQsfslFdLjLre9XNFgAAGOEgdeigMeXNRSsUu7CSfJQ_xf9O2mtUJXoOye5aGJnVoeRVe2fSRDFWZF5CcWjEA5kW4onEfOsfh2ztfjF342ulvpKhAEtylub-qe1dfAET10XBWKiUInhiqoHiRwKCHBLC5yKc-I8Dc7gJCKKtQDZdPN8l6TJlx60s-m-NbiQTHrwNiSujJZkZfWuwSRtEL3qpo-IZ5MQwbhImig3i_s_kI_16lVKN_Tb6XzecHwruv8Mpk2BnG01d2CU5I6FczDqY_lqz8o34ohR7KmSscU9q8eXz2kyk_rZ7s1iCabJ90LlhRlUoPX6LbDk0nVhMxP3_NyNyAZUvxekjnlsNa1XYLVw6tpbeMlbisBxYMhc2JLCiAWxlL6u3GQBiDQtyx6V9MrXEBgImeoaLTLSpoudZjWeFR6TE7OxazRtk6rMq4J9cKgnS8ANbQ7mAb6tpZRuqq_7vgoJ85qoDiYVkeyx2wrKThLlqEzslg=wxx-hxx",
            "typeId": "portrait"
        },
        {
            "url": "https://lh3.googleusercontent.com/6Xnn4uafSpCQMvlMh9vR4mT6xztLIdbrSRyfw5AmYER03M5L_QJ5yc_zDefJbx321mv4623hW7pwNC719wvLn_9G4nLYKac6758b-Mk1zja9PgujYjFOa8xldIPaMSkeoBS6xrD5jhGXOc8v_RGbCLfh-XL86-M3aVdchO7fyy1aX5gpU4ptgii647lsvyDXVK2fIciSs3_EJqTP5Pl4p_7kavXI_l3VxDd45dD-kWpBRS-CGojUv0yx13opIi9gfRSIg5lheru4SGA3dp3KhwHA4BCk9Pjp5htwomNU6wBzJP_EdSvrMUR8-WJA16p63QiDFf7p3hf-BuQhttmLNxTDwCMfxiZSvVp-8S5Gpw-iDKYcrGm20yFeRUHJrUdWLqj2wiTkqH1copkwAEG8PB32NdD8dp1l_P76ATxWOM8nQP1BYWvTSmXkGwiqipRUMTbQq0iG2SMKgiZ5M83F-Er-Aq_wG1VScAblha0qSPUMYAvuGniDVzyMhTZf1mvfTJbmPS0ULHX1SKy8SpdoHTFzZRvEMhDUQbNnBcHHvVmsJDgjN7OZU2D4yZGWq0WRbQSuc4jnRRSJasD_Svv6TcLJOL8mYznzWoEclMaG4NrBXpvo2tEVuNi21w=wxx-hxx",
            "typeId": "landscape"
        },
        {
            "url": "https://lh3.googleusercontent.com/CdBKFE1Wn7AnhPwCWsHlVJNDQYALz4x_7x_D1k5R6uqEkbWhwLbKFZ9hrIPBJi_oieMT-yi97Jn8r2bGxx45exIANGbrxCNUoDGfqW13FCgvLklCWPiD1OeCxKf2ZgahFpJnNGWmCHYLif3uJNVyBQQtQaPNCES-cHXpdNd_GEccDRtvU5EQuo1yM5aYj8HjhIjEYpmqll3bV3soDKJ658orEhMspFfa7HtGBc5eYt8mmNXl2kPdUf2Fr9TRC5qXVgDHISY27XTVIUmbPEHlYUjLydTMWwEpSagEDe-gQEz2xTVthNOYiyoviIBuaghl9m-1ZjZO4bjEdeN-GGlWJE2F34Nitmeph8wjUja9Ph61ZUcqs9G8J43ozRDu9g7NS2S3F_DvVt0SVScGFFvQUhORcJ0oASQVT8wu3nclHdT7j1U1C-RHGtLpc3jIyTqRjE1mDTl5C4AtGsuwhfb9SGTXgNBr6FHQA7aoaIR9f6SXP1-8ai4zHFN87besj2N3bZjGqkw_ohg29kktZHx442vCu9AWeQqiMUKL40yEKFEj77IoxiG5xkvU9Ap57meooBZEGfJxvNWTsfyN3tPX9tz4-2K-c9xPfVx8wIhmRP5n99xB3gkfcFehGA=wxx-hxx",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/xAkIWd9AL1T0Bm-it43zNNNlAeStykCmfVpW5PvsG759PYxCGnEBkYvhtACHfB1zzae6zHv5VE6aZKMPbR0tB5ZOJNyDsW9e5f5Vr3ZvkNvmp8wP339b5fdmNcZNyg3owKMngMQDowEBXtbf7tAk1xmahmANhSO_CQdyg3th2JvWJl6D7Ng9IoP4W8c0v6L-38ew13UdzrNVlZHecItm72gVMRGt3sAsytHooeFwVjjZBjlwyngQRUMlBIhnUzaY58KsrmKgm3Brl9UGnTlwVsD4FqdhZBI8_2APIyc5G4WU9J52NRRGzFeWV4jX23_91ocbR2a5LFBxRnFacUMbOowZDI0w70qYjRlnz_zOi9sY2pDqPVsyjhZ3zND_t9Lg3IKhX7k7CBzZVnJOStXcZKe5KKufhOHzyAIIS98DjrgpJgMeBeuFFCtfEwZgj0n9bZMMgKy5D3gPUu5ZbLoUqjbaSCYKzxtLblyheOUl5mmTbQrJofMyZ_q6o7UcIslwh9c4KrVc7v4c-ebhj8e38aAO0TDWFas5LhKV_766Ad9FXBkUsZ1QBEyW-Bk4ZM2bt8V-fpcd6CAQ4oNt-b2-PrRdx6g38howtlJUJtCWUFcopqwRs9GqXxIElR-psw1duW2U0fHvEKv03ixGk-UuJ30fyBxPmxnLID4BzYLGdSNxZamuf6uzttVdyrRRlqI=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/rIBTZ5mz9gW-wh9kNmFBtguODi870Kb4xLT2wGvMoMlJgAxguZvqpVnBr_ImcN_SZ0HopzJ4t9cbA3JuFYaYd8DSlFJy6KTlgy7wqFOtuQNlFv9fsKOXUW5dZ5A_WNJcIoJCgy1W06C_8pGPJbnrTYROTnEbTm6BKPlqq4L72YeepNzzHqMFv0QU_SC0OHK_h_OQP0CoLqffBkB_fciyr6V4wvBxGr5OXfN8L8qr1DMysrb8QYTz8NCLqhsfaGzDHbZS7HGQc7mFv36UmY3LlFZBhdeHw0WTeQb4h3SOgYAyCjIyZV33ODFySPbeH6Fqt7aUwpAmR5GTl8zftJ2rvL_Hq-wRFdAe6MIRxjMqXDQVNsON7SY5hkXvBIUedfb_HEYDtEdUHu7vXTdxlAdmK-N_GrHAnTGRdxfMkrHbSrg5IO5FsuPfz7_nOsJHtGSGTnq_EZkrbuvOnGmy5Miey906gtR7tDXGp_LBAPN0bYSHA6dBNgTkU_HKoOOsD02cewgKt5b5qsnhGIzby5oZNHfZMUsWW04NAHwPeQ8W3TSUghu2KnqytM6iur4nCoMKznXuX6BF-Nz7EdiqIwj57xI2h16xqGMoeogFlQ1tkhCVaZo4EOu45usG-CTGVfAMIVddpGAdWoojS2aYc0Ku2KfRp6hkkOblhlX6YqGc2ealpvcKgJdFloAxJ7UouRU=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/a6uZ3Py640DHNSUtr8S0QQwbd3N-zF35tWORBBGelLGFu36Tibdqc4qMqLWPclXfWRv4Ysddr-y-mqAwywxt3lTJNIl8L4iv9fH91W4a1yL56KzDTkQHv-6ik1NZ0RTTKC8DqTfDy7wlM7Ly9HGOgfbRPQzSa158CaNcqvOB-E-CYetSKLb-wdFewmMyqzoGiwmqEwrrJkd3Wop7kizRfvzoS9p5-NK_0eIbQW4_MbfpIAonOI4rhJQagZwGT9RWzcSpHcLtJBo1EDWQAiY-6V3BVCCA2XWtCQhPv8aLfsfNViNATMeIjP7YtSTH0wi-GtguZLZwNMugpk11KSZnVbnnaFo6WwBiuGPISCKoNrM0ZMPuX6dU8PBo5FMwtWHHCj5trP10PBo4fl70aLoLp3TrTiRMlKPJgBOHLdo5Xr2XLA4ODg_wb4wBIuTM1QlDweWPtabIMLwcnbGbkwi1hY6kcpGBC0B3v6zZ4pt6WPULMBftuqRAJPygjoXcRBnHh5C2CGgOVLekRuUefUoHFsJ8Y-cKc1-wr9EBU1eFlUbIRoQ8f6rFt7YDHIp63Lk5kt_sn6Bq261_VR7N-shXeVRZ63IxuhI8RIKv1YN6dEVglJr3myAI_KBoxX7gCw1IXpvrP55bgrcgLsLAQ8zAQ00mfKSJzZsA1PNCtCfzxYpmEMtFKz4WDwUYFykEJSE=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/Xdif8E23h8NqXNKBpqkJBb7KMl7lkc911CVeUH2Ar7oqXgKKl0NHuw9Od1TTNwLAXCHYvWiu838iZ3R12rwNoRbLN_qRY80DZqeRHBwFLYus4VWspyeXV600abGaPuGBtrVqiLt6oJcZGJ29te3Iqee8FoS_eK9_Qta1g5GJd3expxVqvw2sFnMwU3ng0DDI2EIyx6uzfgKxlty8LOBtv_DBAFqMvh3H2PB5OaOAN3YkBIFS3gjpYolUn0cQdShy6iLFQD84kcq1yyva6VBkVgp9QkAIttgBOftERP96GtN5J-dlvyi1hSxGbeLhHiZGQ4oBrnT9GTTNSPDLgUJdLZ-ZP2IsOcyHHOIbdTjh0_QnJ2ul-NAaxZKuHuXBNJqK7H23vo3nmmySCrZjIeOj9NtMXP0ZIbxLqyG0I-dsGR1CIP_doZbTwNPi3_Qu7XTXWgnheo2TkmfJ4qRZd2HcW_ZpaNFZnXVQu1TdPnfcXCJysFXQ5sDJKWhN9FX8ui6ZGyCGOlnmChxDX2IygkxcBj9f9UiiKjIT7eEhzC3Vyyi6ofFd-Ziv58I3FD-8r8egK08--LsrvMRJrJxBy2jdiIY0P5EHUEj8PhrqL1pRGa7-6uJ2SFITX_kxJMaDENLU1FNe4QET1afxIKjF_3ofDJNqaYvz8g22WlxGR4KVEINrQNrMWYUX5b4MT-jT_q8=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/WNISoG6ed4aI855Dx47ohxpHlwP6UNN0uRjNRRCl8O-nbdViH_03BTwxWB7Ho-jghvTEc9ieEnITqECXwwpkXY7dG3X59fTWXGkStSAJP9UIPteRlrK9812YibhfjHquvfa2zh22HLhJW-fSWeZWY2ESMpMtHOs34V3SzdqveMHeurWbsW01wao8lNqQSrBJ0oYY-ILKOKdOifsbrEgtAP1vtEItDueY3BYZbqdzOlNQSHxog1hKEAfFLfNFwGTYvzxOjQiiOdbq7SYgjVABW5p15PT77qEGikwHj8prZhFs8lHgmYJjnG-1Z8QVyw-wMOaZzDjEIuVgVgtjIxkP69wlats3NkOCAQekvFg8c4LCaGUJy4mRuiMcV1bvSuLpAGQbNWij46xEOj6IO64Ale4gVMDlTyrYFgu_IwVUCuvbl70xnDPCTMnrpke7N1stDZ4byXSDgGDzZ_xFKqhrvLwimXjek0WHiJCPeWPLQdbMzK48nDQqZABO-QEzAV9pSrpXoz4CKvWKaTGqcrDjl0SBdhqS_5Tcf0epByQhxeWEcoB6JLt7sHqh4zVJorW_9dFLM1gpztqg5J2SGN_6l6fV5Oog_OerH8x4F_qaHsHnsU2a6qR85BIGArB6O-mGgTfYZ8Xjw9CcDtENbdMkHJMA1b9xhlrTf-kgGr4lqXjzO6pPc87L_1unCZEmZzE=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/zic-lIdkGwy5pDTLEV6Jw1OiF1MjPMMAYhXKrEa5VffRSMXXszr17hPGnOnsawJbM4hWtMOaZSOSRhNXBERjzHdkByZrmoNz_nNdOVK4vDq-fDymBDtNDanNoqvnU4ylUGfCknIzRnIvoI-hUuxfXpCHL80aIx5oJ-g-7MnaP6Fj48ormVlmv2kqa0_ngVjNkC6uznx-mQv9hE_IU0hxNt3Y1yqylOo6DJt3nwHTlkzz2nM3ur7HgL6fV_ByDMZSh_ovPC67MC5nVVtgpgPIL0r4VJpAjqTgIWG7m-CLZHS6TP627NmZXiqhiZq0x2qkB7kPbRHHIR1qYukDjil5fHDFOx0ZW_c9OPWwtP6UNbkL5szMxj2LgT40Md-wKdbDyjTTyJgyAhUzswPCzbC4rjmJY_650CR_7q_3h7FCgNFj3dS7Fg6fij9n8_cvdZlRF8m52QTOOAin6-OVD5peMebPzZfVWMUHcypujYZ3ZzkghzUrQ8rxwze6n75uiXyxZjlsbTWdlR4LVwYmqUj2bf4-2scLAn-rKQ7qih_kbJixJH_dGEzkiuA3D7yBntk6FN3DEaUgq2O7d6xIDlfbCLe6cF7aTakFAaTyxiLTcGwcBDSgnJDfhS-tYmGYQ_01re5zmqiWfik3mCRcRxpfZk14C3eESialE_AwllZcvpnTRkjb_GeSwtadg6JgDmA=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/3IM7aroZbjCz-K4QRlRFxA_SNHBIjjf80wjzr452dn3pqwZdTze-HTQOKR65CQ4FYuBUaMU-xN_U898nZ3IT4semBs5u9iy53DATiZxposTidshyUUGg9_gR4SW1OI7SgIw2k7h0Tj9Mc5oYHmRcwdu7BomRJfDMEL73ETvGi2_fbCdfbXFEV-VtEs6sE4T85usP5YAAY48tDwJIok-u4aOdugNhXjSMkgzlq0hvvq5xlwAKjhn8NGu8ENGuOQRn-i6NaYhn4KdojNJ0w92-7Brl55f6n7Z9KO7tmFgmrPfIy2jzM5kvWzH4StMjekKPBuLzI_IDw-5tYO5Cb3GlJv24PGqcFrlT9a2F5lY6OJZniyqjgiAR_BAmnPVX5bQ6cW7LU-NFGxeZNkpuWF_HYOwyzpiQGDbJyImbWCG6rX9bAukjX4vBa-Dq4y0EdRzPDVKzFPkEyVQ4sHW6bFmZShIaMpQlioc1IyIdTffgrKYVJNJdkxgp8JGrQASmB9TPiVs7oUCBh3HMLSZQgffV1CrEnsKuqUxajZC3Rx6FDS3_JhzXdqaYl6sI7SuuC_iTVYuqGqq7f44D0XuNMvZEvADNnjZcxK95RoLXrZfsjmSv_ok7R38JJkaRvL9IGJup9PVSC6THEh_ET4CekYmdcid_l7ZC-MnTRgNyLi-NnZ_9eAUSFYMg9xCkWei34iA=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/2NA5BQd9bKQJ7CipJKTSwTKvxfXUyqMpEq6eCtgLWSof8Ny7JLpsg1O9Pv38d7DztnbW6sAq_j2a9TTZz_u-Bh3H8ncJK61o__jt8VZ8q0LgoxxKE8a2ZpTH1EdhmiIntItM2DXz28AqWUTdGtnmZfoEkfRSvU5Eh682Le-120abRg30OKKAlUkHDo8UYqanTKim1VZ9NftvtmARFPDcuNoPOFqwvBFWzZbxG1vxzCiTTSgGNtI0kOzNn--k_GsAFl0P78io7nL4GawxpaPmfVnMUwmjTocTGZwFCpIxJfld1jFEVxFxqv7EBB9WHH80mfMxMsHXIf1iCWi4TWt2dkYhBg35NeeEcQGdn9qqbczxQet5YoSScL4cl6VzHbx0_A3NW2c1APi4-2y8DbJzsQBvvlEUn1Wfsz3HTViBw5TxcDnu785Ip8VlJAwi-LH2Bbaj1ZZdDIUZmdTKedxN1SBzwAyEKXljk3sMz19EZynMQa1EEMwuhhGNMxZ39noPvg5C1gl4yrLQG_GKZ-LPO9cLgrs2nRSEAhFYZl3YLR8dN2r4PKT66vnZm2_56B7YGLhzDLGmBMJcpIt1xyX9msTLbpxkE5rWBV27AZQYYFow1nkSdvY0J9gg7VPY0FX0Bya94W3sJIBkJvB09PC4Ljhtrx6lHGs1bS93LqXciuq-eYZbfQBwejchCffOfCE=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/IiY7eXtiN00ofACp_a_5Q-1AOWdqfSFCHwbq_ZQeWigaOjgsVLUslLX-MAJXeHRDrU5NIIJzQUrXnYJm0DOa-lbpPRJ544cHIDUXhubxDhFrBfQ7uV05s16TgOJuBwYtJ8ly6TALz-FrRwyHsk58k1g12v1pAOtPLxGy4CzcWv7Wz7dpHbBbel7_gc1yDoeY_TzvtWOvxy_9gatF62OQRrt2F_-Ial2xTTEx1wHI9dkQmB7Ij834J7hvAuignmuaOH6dEs80IF6vNTfm5yH4s35nG82Cq9rqa6EnTMFXIpOkI47UOxHZTT0Q66pB-ZLhrre9FMjlngpmVDehkzOTQXdSF7C-mK_rL6L7ZemTuILXZNRY_nTlpzJ2EpmQLIZVC4a_jZnY9pvdnkc_48HQg0Stuy208TqGLNYloOOUz2lL1tlPEYVKXz1Hy0cyx6KVSDWP5uDoNwNDdi-raptuboKTGzuSTqiCgrvgRxveIpdnmBORfrHrb2InuVYsN9D92hRtU5uiKIl-dYyGvRALB-KFUL5pfrRu11WCz19qLlQQcxrraI-g0ZQU4gUJ5dito06hYoxr2Nge-ZyS5lJjEUDsBJr8ng4AlAtWPIpdKQc5N3Ov_qzYjmZiGwsiXxchu-3-sbzEXOFrhquJ0qOko_TTrrE_GAtxYHuE1tURzZO_Nk3uHUnrxhXdvlY-PFE=wxx-hxx-ft",
            "typeId": "landscape"
        },
		{
            "url": "https://lh3.googleusercontent.com/IUybfK0XGo9tNX2W4fAscd1PNd9P6dMJX-pocqkAIncWEEeG4UA0uF1HvrwqmoCLR8VWxypWf8s8NDWCdGG7zNt7aQxMchB26Zu5E9PyAv424JS-xH-ILdX00dNYGI9LvYe-ZK9rjFu3t8pYseTvUtsXRS-rIuJSFciK18ZukYkI728MCvkYWbQcylMojjQBBtwhCjEK-aRyZpXx9myWTOvgoE1dvV--i6l7-IPdXlJUOoi40TXHbpIB2tzXO7FAP6UNkQlWQj_A3bZhbNcvqCBZfofjHH01bLYnew3ZAtlXKDGpiCgNuoUbeAliBXWkgFlbseHnijzFzme8Cstmf3pOng3SMG0soTtVuWAHXRCh35l2rNpvZ9XYVr1HPAYdilmcQY7uzK65WDnG5dcHPRH3kMl9ssIVQBH9fWj6qGzdtzZrvL4Q5K50TLjy6Fp2JGT2qoMCWS-CRBKKZ7Qc1015OQQUprnY3LP0T5kGXTucKvk8VehZCfNrbzsqWu05fAi5GYyDRurMj1rwtMEEgairazIA8Hcys8ssIdINbACTpbMoBbYtqqr92ayg996rZub-7cIKyEkfAFHEBUJPFC7mG8bgkTcALPhxZbWs1bm-gViigAUWsasr_j2Q2I4tNQ2_LXWOdHMHcvJkoouTKa7j7tya2OHYVlkheIlvJXcIMrmfQaedCI4TcVRSXwY=wxx-hxx-ft",
            "typeId": "portrait"
        },
		{
            "url": "https://lh3.googleusercontent.com/fqte2MVlVBnPqPbkpE1PA5uelKxULI3eqgUOydwpV-W0nW3Kj3FFSFX32pA4YA3nsT1vEJ-Asr9tRu7bZXSe_XpawMfFCld5LHxPztQVQGArWQOUl2Uda705LMzA9mo3KjToYGDE0Z6KuBHgyiGhWc6-hraExA6wwWKj0AbaiS4gZYhypgYCdSIQMvynA2fopS9k36zwNEq20vmcsWzN7SEVhroRSaFYGsn9ZJs97dF6n-kITnxTMBWcYZMwaGy4GoFEX_6W95svAtX0IgNZEpN9rkrGJTg5_b1GWoabNdAi-TTr7YSteXHZswhxHPZiIk9TJzR5QEWswE_wAF5x9qSG4pXB9d_X_mOMAGhZXUPc3-m7kK7jxER8W2OGhTlki9BsdN9CrV6KUkPhpB-o1HKefPFon8y3TDdNV6EUVXZb4SDW90_HBTNyGSP4mkiG1aI8F8PFI0IEB-gsyq-jmkYnidRI4DY4U_2jrvtkj-yS-eR7gXf1CcfAT9ToUTJxdIrNeUd9o9Bz0ZHwGcsIFfq8HDd7IvIxTsfcpagNrhsR1vjjnEOgi3WO_GMyJNI40t3gJFBIPaIvK080fTTKxfbbPofzHCI7eWF5xqpXdMsajT8Xl3KVr6jb0cNXUes6aoZYX85p-YzMOQnYGZjb5XyW_LJ4M60hfnLOjXiBCOiJgAB-mpkOusFjSRzlykM=wxx-hxx-ft",
            "typeId": "portrait"
        },
		{
            "url": "https://lh3.googleusercontent.com/JkeDi94VYGJjt9Q9iuBxFU_s6wTv9ZTUrSiSh1ZkXMHLc13yr03vbfCDK1h3ILsQTsAHaY6aVwBUJJmKZnG8_RCdU7Iv5XnFuIBHcZrWKbygAu-FOCX_9yApDqsfEYMGYM9Jkw5M8k7LLngZrc0fYqVgUlIHsXUQyvdHxIljFqrmlJ_rVaXf2IkRw9FKnn0CQ0wiEdiiYfMMDgPEoPMfw2SDP5NBAAkWqlLoGbFF_9-b_1pVDUBWmGkfW66J4yeS78b_J_RScRhHcRsJNA6KaNvWGe39Vlz-PwneW3VMeh2UYZbdQrbdxl5iygeQppAiVwhNJWFPoiDOEZWe9K0l0k4rPhnw3nyXDhfFmswddyO1Brez6uWktMCGbtJ_P-55VLjgNqyCz2uMQrnXt48leeyf08yRpJTLwEb_AoOq5l6xpeA190miCg5YEPYg2L6GdBrO9qmxDPj6ObBVX246OzQEsC73vq2hZJdhmRFXwGIHoIrrLx9MfCo3MOtH0ES06dsaxKNZRGzrz3YsWUr3OKuGbLGJmGlySyCnGXO9XL_QS9MLtM5Ny79y--rl-qVxpXpqVgys9ia8RU3d6EWApg-_oPukOvrKIrnH2c-E_pWwLCmenZ2T5oSa3uo1A542sSTXPo9FnZrYC4tW9UHc6iP3qSYE-cfnnkuYFp1DgXJKFPhhetzpz6xCqtUgqx4=wxx-hxx-ft",
            "typeId": "portrait"
        },
		{
            "url": "https://lh3.googleusercontent.com/xlZDHkMKr1kn8i6DE128CZzuS3MnP0yVOe8WO8biqJ4K3N6PlZC-u-Btxx7pq_yprigCg0b0TTysNmCY3QsXYJwUp5ljQSMhtn0ZD-U8zKKF-q1b738t-BElbnYLs9LBBLIIIC0KiYll-zlEGp8KWnvj0a8tiAg61H20rtmcbgCrmtSeftdxyy-dO5nx5FpyX2qztcyE94NMrarEc6PNX_RfWSr6DJIbX8PegndzD1VJS7nxR7MDu_P3X0ICo6ruX1ggAwV429Ka_pxd8AnJyS7f4LGaI7vnuF6zuGISdAwosuuPWKK023fLSIyk8n_9bBKDPTeRRjPA8D-UfFOervPlTLkR8CED1EqEkmwXE5JIefjC_1PbBrvekry_S3zuEbsRmfupKQvVJKttBUPxAxFmYLx-KBvxhbWKRAgAdNsQuFAfX-UuoUqoPqyb854bqNY76UrJiH0JbCacmNSC2DwQvkde48SzL-eGo_KVpdNcD8P65pOvvDAVcvtKrBs_fBU2kEHstayts3lktaSC-_VfjpiDp3pQbRSmHJ1aaiNmEna3g1M5ncLvyEsntGjh9MXXNWg6pxjnxg_sByB27kjBoUZa4vb_z4ORUHZtqmFVe-zA9Q6qc2c3n9-GWtIuT4fZzdHCE2LjW2UQj3MhaXHsCQ1-00z65ojLSTdvJUSWDjSehfUZwaHYpSxsNjk=wxx-hxx-ft",
            "typeId": "portrait"
        }
    ];
}

export default ImageHelper;