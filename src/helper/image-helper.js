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
        let size = this.images.length;

        if (typeId != undefined) {
            size = this.images.filter(m => m.typeId == typeId).length;
        }

        if (limit > size) {
            if (typeId != undefined)
                return this.replaceSize(this.images.filter(m => m.typeId == typeId));
            else {
                return this.replaceSize(this.images);
            }
        }
        else {

            let tempArray = this.images;

            if (typeId != undefined)
                tempArray = tempArray.filter(m => m.typeId == typeId);


            let ret = [];
            let usedIndex = [];

            while (ret.length < limit) {

                var randonIndex = this.getRandomFrom0To100();
                if (!usedIndex.find(m => m == randonIndex)) {
                    if (randonIndex <= tempArray.length) {
                        ret.push(tempArray[randonIndex]);
                        usedIndex.push(randonIndex);
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
            if (i) {
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

    get images() {
        return [
            {
                url: "https://lh3.googleusercontent.com/e9SygCHZCnozQuHfQ5pXAQnF0SAXzwE2EDRpAU3O76jU4U8kEkRSfrycI4qXfZZ6SY4lxFccc6qaskA-i4XJtMFn7uuesGUPAYD3pgnWuVVNwCwHKZHum2ZTFO0he834BddE2noZ7V9enLQn4qeC_KxqAH-wOXEFG77KgN2_Og657lDZqrYWQaU-SBAP1tjT9_TMhYgPmEWGRp4GM8zzxdRU6_E7SADhyXO4l9rm9nWLdFOsECtkthEzzuBIxCys96aCXSudW7IctpKw_I7CmrjI5McVI5X2-EcG7ewWruJmhVc5iXnoHDswZPsc8I2Ygw2C4OScfXZOMwxLyuDoTbzTZ0vTB8JBAQVd18AL6DLtSVMfqkKSZBBEvW43n4R72_qqXo9WDw-DKfyXaCYYPntp8Lzh0mQerrM3iHKt_EKkA9ByYPlr1Syk7lUBKXntDYRVcAb5Kz20Am4dnv6XpdGe42zoVJkTn80xHNPp42CsFpLHLiFzJBBQzjnGYRrFR1vkfymBKqsaGbQvVlDcvdEq9_C5jIcKoANL91w7NVNVso0AOYjsQebKhlxY_Nh2ue8-iQmATEM4MxBjatCAaAJt1YRy1LHAJ2yhr7VlGevsH2v1OeyH_9DjFg=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/SblAWUMboy9P4BpOwrsddPtsTtrAJqPdCZaAiF7nCALhMloV-EUwX8_E-DOFK_ASFf5sojN-v9qZn6ftoNmvGm1jPqavXAWXlJZLQO4zNnVLrUqMErDD57VlZzLuZ21b_pj30xnueIRifITs0JMaOeMQ5CgbxmNDGzofiB1GXlqOUeakqyPcvaLfIJbvZmm4PPYH9YjX4fKh796NduimXLHXT0BOoTx0x9xARvnAA5vZOgQ8_qA2epApduEmfANoSns5osvWFdjg8CtAZwFRxNQBm5ReK_2I4LkPmBhbSnFoLRU8iZAo8kD0lEaugFYxlCjnXM2jh0Vt3-_VTvKbqBAceNL8gD_ueqXe_eW6FWp9CccMBeky2WjQC7OvOxFONuFWmojPBtpgagPS15HiKlZb8s-lDV0liLjb5sD-RU-Hy01n5R4ERJ8cWdY9242SU-MWeKuPAsynDQmqdcEn-k0ZzNFF_TYJZGQRaPVGeQ2st_9oQEBsOCWEEo6IrWPAKLwncbHah81hM3exl6SAAA76WEIGKfZUfGNgRha8Ww2Fjwh_Pk0Wg_S4H7VCJAx6dXmI6VOgTqORl2BUrS4TtCYZSAjJGtfnaxTmJfLbK1OwDj4ASLXAn9MkvQ=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/g_l8nR18eaMuxrX7c_PgbI3r0dX0PKDkX0j-mmcz5hKBYMQStBfb74D9Wa2ua375v0LYt-a-kZMk8db2C55H6YkpDlGWkVgMc7ufDpSwQalNbdgkKoJ7Q7MAF8aRoyf6bQmoVhzYQRJIJ0tKg3mwnOaJ6Erfowy06Qma86qT-fOkuGvvGIOg5_PfhswV3fheVjZcWHMdY40I_P-3k6x5Xi5VVwUmOw550OhEws5MTm6BZbNQi8MeR5ecDkiSW0IJENnn-HX1WDR5K8pHm4MEE-37tCujvcDBkekagia3cvNMLXCKQ7MqJq4NGfRqzux6C2gG1_byDe9gcNDZ-kcG6gdSY-SCqdegxEaoEvlYiS1xiI4IlZY1W0I-v_83GUJq0YBzhATqBpqFzLWaArcBV942CPOOB1i-D5okJ0_R4QnxE3PrfSTZrTPPhk_AOxHl1GFgtJGybnYNTar_UjRNxCWJiUllGDYTWudSzPZZO1lL9FcMO5l_Rv13qFfec91XhyivGWf7tqz11rIdSePDok26QNu_lsrIS0udQqyPRnsjYkdzGPInHaYT5tzN8acleoL1eAoAYXDmbXL4--Y5EUSdemr9j-1N8wQDJR-kganeI_WbkgolCC_0BA=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/smAkRnrk2PSKiyufaA7PNgFj5aJkj5_d3nJKiVFfvlFGUgxXftsUFkUAWNSZIucihLsuhPe4DjUctdn72AJKKCELbf-3oLhkb8cPVaAAgSTp9msP7FmW1iwmN5dB1dG1BNr7g4m4MYyDs6fTRL7homfcfkVEAyevyLHWz0IFNBIDfwCucpr1fhQtCU4MzDheAv-d_uFBhaNRFmJJX0Ue0EFKnei3baIKyuw9j3jl299rKFYcR2L9SqKjUHPHxOimdsmV-JyUcQUP-IE80NUEE6q-eTMH-wDVE71OFDS1SYR-B8BnUTIDEMmNNfEMuOiW9nD1FeuhaIjpo2QbHRrIkQZ1pfiV3mlfL-lJfY5heAJ3zUO17HqAa9jSiV6uG6B9uxUI9WWif5z5laSN8H03wtdZcy8tewT1eTl6g9wGDjYyuyBuVXWb6LIw3oaf4yJdqTt6ZU112FG_q7hDORGmqhbMuAobPjet1oWDoGEAvbYqe-ZkNXsQL2mrQqLI_SEm0FGQ9kz9pInii4-Jta6jGVpK10v8twQKxWIk6Xbbhvwz9vM7YAtqH79987w-gJ6yRpoBGuZxgXiUlrJRJU340dqPNDbMitp3waGraVUVaSzcp7pZmARQJvTjag=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/DAQA4fIRqp_3zZ9cfgz5YWjm4uHKlPQmo8Y9vwwiqDGIXK4UMTA_8UrmeoBEFVvn_XoFNvEC83CzaFKj3oSZcw9_lLCyxy_VIhKLEhcUSzROHjWctTrbEuo5n9ckB0jsy-j3ONq2r38eyCk_FvQpRKvtlNYR_ixVOyByDNDV2KnoIfVvIRLd8wNXtPZbzhg4IBOUyIimfqJhf8Pin-EmrexBr8VcAtT87zSCHGp7sWgbZm_O-3x2EYAJ4TLm447Dud8ZMuTl1_Lf-mLkmf4voIbq0h5bdLOuvCza-cK0nRPw_iSy8fkwzkQh1EEeEMQ_LgUxpLUWit0HmBSh5g68oFk1RCrQQnQby6ajj51s4A5th_AwBmkfqYcyNIFyEM46-3tFD_Osvau_S8e1l6RD1Ok9QRDxbZhUzpWooPLyOCkzYpsLYY_h6wq3OnkaC5uj06z6EajNg1r-KMUeYFU8OsWaSjCUCnEObLcXfoIkbVYJcXP58O-qjQfi_fW6LteB1juVEOGc_wvV-aRP-vv573RvQ8bnAK3Jdbrx3T4TjecwP_T2peLdle-8gbeFh1Xd1ssWXTyOOWjH8ZDvN06nyq2wUwMTV4PO-SIvwKCZIt1HeiBg_DjogEMF1w=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/xVIHaPFX09O1gG9GTbXyhfFV9S1rFI9z3LlGXnKon-t9dQY8XXkSkci_7M6GkcC0u4OfqgbGvuh1SyI2ShGGCeWcWxcJOJ3luMv12aap9j3pktvyQJW5x1KsrtzKlcg7kcb4Q54HLQh-2mHfBPJuRdmPERMh2ceohGe-i-2kPp09nP6-SlmKvlm3MZaLs1T9rkNjjHOSX3DjypQmmevMd8F5gGWtYZwLEsuSLXpZFDFbczlsVmeBx11fMm1jByDZm-QlBj9jXzNzZGlTFMBZ0-hdsH0qnPZCkny2w6MpOSYzw6uHxGHH7Xas9Z23ZhD0XIcffiKdTkuNgzFl9mDXE2QwcP4HaR_JyDaPnqskK8WSu5X3NVOHagLv7sXEBRDTKwT-RMF9OHQZ93SgbMlLQam3vKrKmk3PTmBukl2DoGRupOpAW0tsPseVuIEhbLGCN9SBFiGSbVo8qE0FRIeA-5bU96Bvz7Gw43OJgP1-iicxhCoZXVr_goVnO4NW3W9pjNbeEAiefW_nqlQg3DR2ivKaeUUzqgcadWPx5X-cmfOhSdrACOyvaHfVJHIScrxIMJfR89G7BaB5Qc_EqO9dniELrmOCYkBVdncOkKkfp7-FAzViqgsqMNMMeA=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/kM294DahNU6R3i4CE_1cuilKPAQlkRjHaj4kZxtxf3v3pwG01x6WjPSonWcjldPM4nDwwvQlgkS98eKW2C-rf6enXZEia6BJoxcI9_5SkLeHSk4LEuFfDYo8FLnY2mwDviIS_ZwcdQYTyJgEStMXL4S6lcU0iLrysC9_sh-mA75ZUJVUW-2LnoXPa2ibBB328y0gpiywjeG27vV8Sv0U-r4A6wWRX970Mavmrrh6XmZJFdCFJz5dyjvZzvvM8XzudfbXXRXeqjqX3XQXpzLx_PNlzIo5f-rSxM6Fyxwv8lm3J5Qed2jI6-is03_jIwTuHmR2GIljCfHHrZsZFkIDOTnBoNxqen4RlkzvGb27tw0dDfNADbi3JKMIZnCjcp7zn1pXERI-bV6OlBAxKeKt_MqLc3Hl1bSsPJ6xvUzE9awS6Posia3FGllKwFNcNu2f5oRsytbhjkqWcS3qW5yN2gHjc67d2Iml3GpNj8Xaie73QJDF5K7Vca9RYyPmkLkXHCo2Uzk_7KS6STvGXIS1pzPszoY4j4vl2aY9AzRokJYQRQ65r3QQaOEVpdQDgeh9HZB_Ad1EJNgi68Ov117zg2O4T1ssTY5b8mAWlH4VkJTPHns9PzN_OHC3Uw=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/2ho086PMrnwSIDeHS-nTAjZB3k8wMhlIZaq_mznjcjuCpS654l5RCWzp5x3zZ2-3jn3cFhZYU0evObXKa3s8tqGEVc6BKgN9Kj8hxLpJ9BwfYmuvC9h5OMozSko6bsMYXfCF7i3JTWdHTuJbjd4zPtalUL6MNhgpHqnQOgUfvrf7Ap37JHAjCN1kTPPtqLbmZJIn67PMZxVF9jCr40hGe4QFaRewhh3L97UpQEbgz3OFCWks_4VwcXRy-teNqSgCtSqD6qtu4V8wVhjDuBH-5krrWSr5GOWD0KRL8QAkndGAH8pbqZ2bZrQ4-_vrsriH4HaiB2HD9z3-dhn4VSf6-hubVUWkaX1CMckrIea5huiNRnTEA-0412F1Nw-I7Y1_k62SijSE1X8LrE_c21t9LilepTe7m2mcCFlkeTf44pkrY9wcbTqLUEVs-RPXxQscZmwU3Ti3BdlEkCQXpf_qbJB3RnsgbG7qFHcot04r5-ScZzs2c9LOoIEUkmlwTXm7iZ4xv5YrAhhGe5dv6oPpocMJ6YT35sYWuNG_GgSdNpTwhXkH6-DHdrhys7pnkj79irTR3sODQmBnDG6JUAp9IfYnt8-HiurG70scmP8CrsmToW0Di-BH9P7sNg=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/88TPpArm52L-tZ0lddDoSWDSgmGvfzlvIbnqSVvCtHBTcX3ORZ-KHSIdEFOrUXhwejGiXV8x_QVyb4vJ9lEteAxaWjrmKQS6vbZq4K2h3wYg89fFWCgt6Qxy8RBeSm6J6-JdxDl2L_t_zwSoIYOjmSJpLAmnIqaamNtvofWI8DOALbLL8PX1XllZUlxOMA9Pb3j8WZ-84yBISE1JEuE9e-6JE2S5f91IybUgbQEeVxFdN5oYDbw4hiq19aYhbLFNOzuzAthzeYJ2vdfqWa9vi4T0WmG-J9_12-o8KSCsmjxBIOPtXth7y5zCOMg22HV64wRRwl4xVzlBnmsNowIYigK0LxTCqvsZEcMztJh19YGrBySMJQRRaGTS9Pf-RfSAqiyZeaTyBtj9YH-s1zRv-Mr_yx96Ht5WD7cLOOPA9CqzBlh4BBayavVjSCKockdei6yy0B9KnSw1u_uAz1cZ8VfrKf0u5dFQKDq_pXrcS4PFmbc3kGU0K8CLnqQEdrxCSpgRv9mUvtcaKihbozV6mZMX15Xox_95XCQ5L-WExfMje-gieisFcDgvzb2LZ36hfpPEWMaOrIrCK01-6hmmj6zUW2J3psgCpB6cFaiC0tAflq7flV-xLYWXjw=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/UbUAUWbiGt8t-6aIj2DM2gHpnIQWlxMwSyUpyvXq9bFjFGbRIdLXpIgnHo-UMIu2JNUVM0H_L0tiUigDd2V4IAqxud3W3kUddzW1e6pibvVCrR_pcUekjm2BWgIm73Fel6RxuPbsI320R0dfwsuuX8IrCWi4GN6PhJrh8UOk5atT7L1nAK_qps8Pv_c3RJ1Pp1QRpN_epsprTuHcS3iuo2pRLmNfIlNHmsOd_T1TlZ-RAY-VpKNH2bG7ldpf5TxMqxmuHx_PPr75zCBfs0QwhKHbQQtJVPc-AQ5WRkg95tZW0uKSXOHoGyVIBJjEYVPAC09-MBN6gI-nw3cxnKkY2SOTTHuGJCHT3nbBekaB_WjMAcfd2VFK86cN5WXv3_L69CpG7_J2aRzKzQoMg1vOmz9xEuGOjtMHID1QL5W-9ljaV_bNOkISrZQmNLbuJLXRVC6uhSOEoSurGafp28vlUS1fUGOQxmwEqjER6g8kc8PXiDSp2exriXJHI5jQsrraOvZwZqLJFOLWVpYkJFYaUh7vdeZSdbhQxB842rJOYMcwSqZQr5xqNzszla6fq4KNwGfVCVIUg0nEPCcH534BVX0MseBQlhYytkNEoMuV459FRTe4c8eORyTpyA=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/35d8rFZpWO0njvD_96iH6Pe8ZdEEPtKxM2rqxmLRT_MWGpuTgHJSflNpJX_GbleL-2MV358XEo6b4f-cx1gpg2-FnLEUT2dQYIoGf0MPEZiVt156vsrY6S22P1XL4aZWRPc9-p2fa_BFyP519Y9TjOjXkeC2u0WbYsBhrHlTv6Tb_GUdqWjhmTvId0DFQBucpzV-SenMesMzBYd2sJJXOSb-SUS0jMORn6bwB1spLri9WdOcNFGQlAm0emzbsjSMCaS3eQPBFxXN4gG1WDImjxpI4xLV9ZkdxrRuebCSbuMw8hD5K5VrGP7tNgC6J7sL0WeKzvARy4EXdRG8xrOe8H6E3nuWaS5yk7ZICYPZP_gCFhVtkFP5ejSsNUCWPpMJKnEjX82GrP-ll6513JUxA5FJnb5m12EhbvjkbJmX-CWFMQwOcLWT5NG3Z5Hm1uVP_0Yf5Gzlz05WLqv2xLilFmop2rkfj3QuNZFnYA49fac-XCXRgRNmC_b6VCBwwIBb04qfV04zG5o8mYUpC2gDpH_MaubW4QWM9RKYHzOPlKqPEY3v7PxKskDzmvJtVETSLgCDp8IoRLrTszc5tYd6Up_GURsF_wSm8m934u5STPIPkYK8volBl0R78g=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/nZ7mh-tW57P0IKuFsd1f63fT2bah1ifFKJsehKZ9LAytioH6iahW2uEVkSHwh2wByhKm_dgHU7eE8sNa8-kOv0jSEts7O6Hv5N0oYQdyLYr7bqRlieBRqampTVX00NS-VOhK33hzHaIEeV3U7Ygr0cZJNjeRP21jf07OqTiDVpOZnDL8PFU-Swid9Bq1MGmoONbZFjf31EBka57Mq90-dLapAR4FS9pHeqbYczBZQ7JLp2x-2GKqZ__-6QLo91Xv6qp0YGsq8kNiZ77wqf0zP-d1McyaJMgo_JbybrT2epdNubhYgsiKri3rXTTCYWSDmk6HcIneVcynh_YhKTJncFm7dOjHa4eSpRiYenBpQagfMMWz6XW0nxBRdyFoiisGAdqZr5aPHVOZZFwAqBYLF1o8F1YjC6LF4K-1a4d0OAvobB_43GokHVhPPwX2k8nUo5jMz62r1R5wE6njxQq_QFeFXCST93eep7jPXWto2jr-mBWELGrgerLs4JKHBkHPQLTvdf327hMx7SSmtFmsfn6Oz3-O6qBhQpoWtuITUsDxqiTlViTrwlIaOtE5HAakEk4GS0jroc56mV02tPhyl5H57UzM-h0Kd55WJQBD5dUgDLN3-4bmTg9LLg=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/fHfNWEpX1UzNS8dSXZ6wrLRLouNbh5Gj-dZ5S7a6y-XkB7XvTC3ue8xOqqHgr22uaRL0SvX3czAfNPBQJHop_PrsD5PRG0uPzTMLddwt9VlXD-JUM76ckjcJ4Yrm9CqdUeH6AYvila8iPr4SQkw2O2gh-lvG_vkpAWVBEu5fnsc6dDnk3kvOYyyHt3gkdFzacTQukzCKaPb52qgbfO_Rac8J29FGFj15uI0-Aq5JHk8TPZWEKLS0JGTSffi06wnlGaDbVM0v5D50S_iM6JfAOQw5PMuPrqVPHAIllvrRrDVkBLWNeharkinoQN9uanGtc3If1awCHPsvxc4lUzU7Cf1Wb39P5fn5avPFdW2evEHbWy1p7T-nrbDjnLVVDBixNeEFdU6DJbKO0pHrCYOGBt4v5y_G_NPljv-lKUukWyx-d3IJ4qFywFqF7qnQGP_trvN-6Ufuq7oSTa1M-6A1BFG6P22uk7Df54qMenLoY_uC9765kzBOJjOoaJndYa8migCTREaljADO0EVYEgTM9muWK21CBX_3TsRxAhrsoH-7mu7yitRGiYNlogfPK_k0QvRKrhZcohVH7QSALy7e3g316_ABv3WjPR6dG3I5N0Y2Lbc4oOJaU5vVBQ=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/ia_1_eCQzMfXwTl3seDi96CouKe2Dw3YJ3K2xoRiFNKFCECxaIY5jzeb1BE6Sfp5HCDw1u1M0kspeWd0eNSfP6U5U2tr5B9Wq6GlsLhZgmscqkiTl7ohw-_Cpo-H3BoswIl4-C5AbkCIcvHPHsTzenZn7yrGhVJxXwrKA8J6KMiqt8i2efN7MW490H8MOwS0CWX9e0nTwniqDpOiTyjfZtAvadv_CawjLrUyuajeCf4FHBOb0E0WkeizF0ob0A_5fKdUKKI160UerkH7iSAOlWo8q7J3S94okX539E1kXFCEfzunJ0bgqOsuPr3Tvk8ftejfPXsRkSRanoII_F-EaxaF0ZQQJ_oVMTUjlJiUWGF9rVBzqpa1AbNldB-b1Myxkd4TWCG6nGSK55dqR1_E0YqlqoJdIEOVQkqW14g4kcYLRObJaLw_dvUZ63DK34yzgEITqz1O3AODu82WRzBM3je9W3OUv9tFzv-2cy_mFnCVSfv6Y-xaX66nDfbgHiUBzMspX-wwOpGGZfpomrxK4QrkQXv8at8UVDjz-p49DSiCXmy09Ep6tjAphgrQFOhj-MlsZzwkxlccj9MQu8m6vUgDy3Pz-dvdYw8t-hL2fiZK0nCwsUeXp7p_Eg=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/rrubcy6t1RE4tifNch_z-QLWnrGQlqBnWskBLlVqx617pHHxiKet0UkE2ANF52eJD-7oQRd2a3GFvToYpIiawQm7bBb0q98_3sP11yJP2pqzjSFF9yH-WsvRSKO1HirLfzsCt31ihqDCoPlcNVcClRNZHj64GtYkmF05fraa8-3KCkK3ItWLnRYD2dWA-eRD0pIKjKwlojPcIYIwjIf9ycAclhQ_R6Ko0FUeF-f2r18kLI2L-Xh330D5_F0UO4CRVEG8rHkf7Y5q_DiCmBLkLMMFjkIhouqQu_QrC9x2dmxTEX2Iy1W4zODVbuMZ8wL3zM171KvONOcKDvViKnVofAT-DyMFHMVn02WLLjHzo4kWRbgl7FJTIsfzFUTKTlhqfs8jR30BolYn9xd0DIe6C_OYYq6-AZv1lcRzaj1wRbW-NK-v_O7Bo1biUgzpTz79Eq7R5IdGBET1bPb6lLanaWZ3aM389THjVBqD3T5nSNcSsFM2QbO37nDpGUtMiqYXDyDNTvftCdsugJe_6wt7lIep8Y8G_HbNHmDFkJTiLMzaILiZZcpRcm8K4DW_MAJMohafhhJRvQcVDbdt_DzYB6qHaXMQCqxPMf7oq17r99crgpvGR8GVat4hZQ=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/hbQgE6J-9XtbGXYu0aFJXzOn7z0TGgCRPOXmIXxpYGvZ74Vfzj_SIaG0CstSM8zpRaXhUscfOWXrtA-X-8ZMtOThKd12xzxcvj2s7lIYJKtWrMp3vGmbUjRKMlGYF5n1GXu--Nsh4OAkcU4Ya72srKYlzae-714vBddPX-g4xoPNA97nRldp4Pm8mCFrhuQ2MjH6J6WbaIBT_kfImrVUJUjisO9m5TQsJRgD_Anqi-WYb_eEremxyeYq5AIGohHyYMqHLWYmvTyvMqJqg0kK5bUy3z9v-PmOb1UGLORLfdXR-4QQkw5lROKM_Fat6qtfLg22jbbqh8OMAmGKrH-NCydGuavzLNHEFM3frB6iDCHl1oYI8tmMhQO6GijaximLB6Xe_48PVNYWf6LjulNLnc9R7_Vv83nBhM6QBT2FwwOcWORvT72vsS3AEozjOSaxxi1WXYc4wAlDxtFL5mxPYgLC__8i5PRCb5Cte169mpRG3JCkl7dBZmYSXrFLjH7DIj_tipwN4UczEdLvOW-kzNvqHFL4AKkPmM_gipyCE6eZ1go-PVJkyAm320p_TV6BzdfZTN_zPFtshl9hvw-eerNdMiTCvwtgaysLP8zYm2-YpzjaWLMzpbXSdg=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/60aY-QjDJSbxOC-S-FZRbBAcUIM4lKAB9tWg6KT27KQQJg-5-3RPxahEE9e5aRbB-w3ZtqipwP8WEzNwGy3hAWhxqcR5TUXg6z0tVhB4_FudyHsF0chLbA_EToMp7-_szHmuq5_IRnA57nsKc0iiVpa5cvyQOr3q4vgQcEA5F6M7PeVXe7CJ9G-xgQjFPQNSDYwM0XHfdaZQTlsVO1zPFrZSfgCKPLnZL2eIm-UecO24naVDWBhBxjK1IIFKTCUHbPFBLPV6oXHiDidTBwLk4LL9sjLzo7KEP0m2f9kRVQiCtxtGo9sjnlF5VsCgsffawfwL2Umbq3QroC7_LYg63wetrDfRhMTrQgDUJKQ2kA2_3CDk2zD7fSUKHKBAvZoNnkdFp34C9js0fGjI74GTcUg3c84tbAX7f4sF2jOPt6OSWf_OmunVzcx82e2s73ZL1MvV_fjut1vvuG12jbnZ2oxU27GOP6aZaJmOZ66jU0xnY8rp_cOu-edeSIFsda6V39PyTuc4zZ1oqkwWeZGHuy0kJXoUBlnyBD00LnXYX5SciTRriwMnWvH9o4HRwsYRn4vr5bTtvYgLTHkbAkWFHuaVAH6a7jiw5X4mvt3_cv8gxah3zgXgYIEtNw=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/nuSd3-GADkx0EunPcMm810uvZmCcFh1h-C7MEdkALtdarC04fNGGisLLOtFrkKomOq1KD_fEaw2J3ibsAldVu0RKRaVikWKoQ4qudakJTaIJ-GX6IBnSFDjKtigEsjBpZwJvcPpjFLvkvzl-iqreitYQXUnvjeRvBPYCr2i57RAB6kXG-R4gHeONQwlEv81VYLx_TmAy0qfi9l7ryq5hMo_AqJhP5K4-UE-Kpp5S1RXxSfSt7d00CYfZ1Jljnp9AuoQuNCEuGRJbxKR-iQi_RqSXVSXhGkMC_azqgJJLdj8kQqTMElBTyQxXhxR2XtBk4Pqvqzq6xtvFyn9k83l1uhdKCUSDSoq7dzfU3SPpSPb4RRmOqhpRcY-zNItiJmwMIHssLpwSneclUExQ3ognJcsFEvpzzUhpqfxFvWrwh4txPeM2uVV_Si4iFIPuocvDp6LfqiZ2dPO165haSuuSAWwYeDYHl0VgeoMQ0MkU_VZzTPnsgy-pQ-elUoPQW8I8isMd_XHXc_H2NmHFcTD_EK5NlXLXQpTONCERFnM7N2YuYEFXutAnMc3UPtKQpsWvJqn9T2YUvnPNb_ydD8lcmM5atDhiM-_XmRh_pPGtx859oV1CO3-QijGI3Q=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/nNoyZfI8OeMnYP_nq62pxu9a-83DrNtYNi61P5GPJnFEAzif2QEJOPHJc9xSI6xpwZeqnHTgf1RQioeEwY6MJnG9Dzb93MgRZTpy9NsDNQgIjAunwV68dEVYmDeQzY2VHGl9u5zsSCRy--aaMv9FwlGFU4hi7wawpHn4CNCmsLE0ra-xA6V-CzkTrU_VYHb7NCOCttVi9Nv5qWvKNO4_UzJDZij2QpqGpBNAQj3oGmDJY2v1yimNzvxY_hjo5X4AG0y9KrROuJKnL4ErAbMf9py83Hp5JpBl4CDn7E49qi1tBz0NMszHBYM8wNznAvI6PUspzaDHS2lfMx62mza6QAlGU3b1j6TVY8o2dlbWscg3-sgDPwF3o2oVkA-8j4GkQSYVV4NumFta_sJzDo1as-KTvTjM3XEDVSBgj07-RLsqDtM3WEBIYGErBAHsUIxVlx0-JNUPFbAxtXeDx_3HnYImuJPxBeIdmkND6sXml_PrCJTeKLWXGsyORRKDInGJdKT5tWKUcUbkSd0LBpfWx2Yh64MInNc4qWCHK8ZVBdDzWhACiUq0BOoLCIlHsb7RDnDWPY04pII15iPI5u4LIAO0ez8eS7dV4y73DFE8ZzYp-JjHpPZ3rxF-Xg=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/EfKnWDbb1nNWM7m1X9bg5-rBMokMn06-GkucQF9eGadCWE5m--AN8JReWWVvjLMLgQJR2kpt27TSaArb0A5L1lte8ZOiMa_gEchkYACK5J9kOo98JGGB44Np7iT-F2loAeMwFzxHtzEHePBWtJmHcTsoQTmAJfiQM-TIPOHrYtKxoDWAEPtco-1eWM2Uop9s5evFbbwffq3V2cYNzyoO7yrCRRyh_dgq6YwEQY4bo_VNaV2dVIjyBAYp852U9KWxfRgpPWYy1XdVytxgQnFsNQvfloXqBBMq0BRnmPtpB1cQhDI9xSs8KkxevTT4-s6J7_sSGfdGqf7j7ENP4sZFTWtWUxShYw7AMBcsHXstR4RfLMl99UeQggwWTr084F4O4rG4Wx5Ox7_79-uwFKxJ3p3Sf6LuifNZOqe__X6HQlwu8f2NvH6M6XWMy-UjK2ov-pXKN6bObcwOXC_tzASMII7mXvm3f6TvdDXJM7JuYVUksyDJktcgwTpUkrKwjZgKG07RQpAid1NxBgzc_0anLJA_RNOFDLyNndGwQFQQvKh6nEo6b1DU2Fe9uLKW9xjRZkb6t8jJMOxFiF7Rain5ussu3daV9UnS7sEMRDCUpVfHhHtQyOrdiytxxA=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/ppSPfMtFKRXOgaBtQh0q60MWVDUjwBMbgxqw9LN2qTSmVFE1J5NcFKr98j8OvugdhwdWI-RkbUrIzLOj8CmTQRZwQ-7hJmntZ-8-IgA0Vaomrq9SyytgM14btOLtGJqfzyU4wAp0i8h7MNBGGemIlDIJrnsdQGR6qMawV4RT6Dx1ANOT8hpzYegphQcdW8IWfflSdzVl_6KEHLjsgQNVFDqPXMLfOEBIZYIHTsJZiSmeOZzGVL3r-42xA4C4cPUqkF9IEXCnVW08YjHtLr2KCABVzFSB7efRL_auaVo84nla2yvtcZbogYgch7yiHVhW0XtD98MovBdDJuJGJQpE4redXDl0jz5I3M4Shp8ELpYkp13vthdY6KNRc7z4dJIi-nHh7yo3At-MC9tXm9kYW_AMwsjxukSMESxj_ZVwFvVVfKq6hsV8stn80iSRqbCXGBzJQ7gwqD0619AnQDCmqErnnsGy5c1bctdA6kscytHlgFYigy1ebL0lnv_1i_xp4ZPUV2IRWHJR7cc-_FquPPidf-8tFt0zR5MuwNF4wb0ff49M7bq2t56y65FYjR4NShmhpWDfQS8MixnRJyFeqS9xJplL4BHFQd9jFuOPli3yt8b5BJWDLV253g=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/hvwoTYhy0JHz43NTiG8UCIHAswBasoWwW-Ov0bnenpn3pMyIoK8nJThkrBAOmsI6z6aWisyCWYShzuxPmEM5hkdIPZkFTi4N5Jawb6N4RmCSnxtTLx7qKNnap26nVlXmNsQsfslFdLjLre9XNFgAAGOEgdeigMeXNRSsUu7CSfJQ_xf9O2mtUJXoOye5aGJnVoeRVe2fSRDFWZF5CcWjEA5kW4onEfOsfh2ztfjF342ulvpKhAEtylub-qe1dfAET10XBWKiUInhiqoHiRwKCHBLC5yKc-I8Dc7gJCKKtQDZdPN8l6TJlx60s-m-NbiQTHrwNiSujJZkZfWuwSRtEL3qpo-IZ5MQwbhImig3i_s_kI_16lVKN_Tb6XzecHwruv8Mpk2BnG01d2CU5I6FczDqY_lqz8o34ohR7KmSscU9q8eXz2kyk_rZ7s1iCabJ90LlhRlUoPX6LbDk0nVhMxP3_NyNyAZUvxekjnlsNa1XYLVw6tpbeMlbisBxYMhc2JLCiAWxlL6u3GQBiDQtyx6V9MrXEBgImeoaLTLSpoudZjWeFR6TE7OxazRtk6rMq4J9cKgnS8ANbQ7mAb6tpZRuqq_7vgoJ85qoDiYVkeyx2wrKThLlqEzslg=wxx-hxx",
                typeId: "portrait"
            },
            {
                url: "https://lh3.googleusercontent.com/6Xnn4uafSpCQMvlMh9vR4mT6xztLIdbrSRyfw5AmYER03M5L_QJ5yc_zDefJbx321mv4623hW7pwNC719wvLn_9G4nLYKac6758b-Mk1zja9PgujYjFOa8xldIPaMSkeoBS6xrD5jhGXOc8v_RGbCLfh-XL86-M3aVdchO7fyy1aX5gpU4ptgii647lsvyDXVK2fIciSs3_EJqTP5Pl4p_7kavXI_l3VxDd45dD-kWpBRS-CGojUv0yx13opIi9gfRSIg5lheru4SGA3dp3KhwHA4BCk9Pjp5htwomNU6wBzJP_EdSvrMUR8-WJA16p63QiDFf7p3hf-BuQhttmLNxTDwCMfxiZSvVp-8S5Gpw-iDKYcrGm20yFeRUHJrUdWLqj2wiTkqH1copkwAEG8PB32NdD8dp1l_P76ATxWOM8nQP1BYWvTSmXkGwiqipRUMTbQq0iG2SMKgiZ5M83F-Er-Aq_wG1VScAblha0qSPUMYAvuGniDVzyMhTZf1mvfTJbmPS0ULHX1SKy8SpdoHTFzZRvEMhDUQbNnBcHHvVmsJDgjN7OZU2D4yZGWq0WRbQSuc4jnRRSJasD_Svv6TcLJOL8mYznzWoEclMaG4NrBXpvo2tEVuNi21w=wxx-hxx",
                typeId: "landscape"
            },
            {
                url: "https://lh3.googleusercontent.com/CdBKFE1Wn7AnhPwCWsHlVJNDQYALz4x_7x_D1k5R6uqEkbWhwLbKFZ9hrIPBJi_oieMT-yi97Jn8r2bGxx45exIANGbrxCNUoDGfqW13FCgvLklCWPiD1OeCxKf2ZgahFpJnNGWmCHYLif3uJNVyBQQtQaPNCES-cHXpdNd_GEccDRtvU5EQuo1yM5aYj8HjhIjEYpmqll3bV3soDKJ658orEhMspFfa7HtGBc5eYt8mmNXl2kPdUf2Fr9TRC5qXVgDHISY27XTVIUmbPEHlYUjLydTMWwEpSagEDe-gQEz2xTVthNOYiyoviIBuaghl9m-1ZjZO4bjEdeN-GGlWJE2F34Nitmeph8wjUja9Ph61ZUcqs9G8J43ozRDu9g7NS2S3F_DvVt0SVScGFFvQUhORcJ0oASQVT8wu3nclHdT7j1U1C-RHGtLpc3jIyTqRjE1mDTl5C4AtGsuwhfb9SGTXgNBr6FHQA7aoaIR9f6SXP1-8ai4zHFN87besj2N3bZjGqkw_ohg29kktZHx442vCu9AWeQqiMUKL40yEKFEj77IoxiG5xkvU9Ap57meooBZEGfJxvNWTsfyN3tPX9tz4-2K-c9xPfVx8wIhmRP5n99xB3gkfcFehGA=wxx-hxx",
                typeId: "landscape"
            }
        ];
    }
}

export default new ImageHelper();