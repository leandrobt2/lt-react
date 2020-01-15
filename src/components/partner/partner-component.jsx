import React from 'react';

class PartnerComponent extends React.Component {

    partners = [
        {
            name: "Old Norse fest",
            site: "https://www.oldnorsefest.com/",
            image: "https://lh3.googleusercontent.com/Ch3gS5mT-HUklIugp6qqmalYcOqQW6OCFoX2hJd0a-xJDpubWtn0ERe9LdwstTBkBJY_023NtKhEa-xm7SSMLfJgL06bRCPDitDK9VkuKlAYgOmc9mTvJWLyXM4dN21e4JGo1NA5N6OT6XVnUI4pDwjmqliAWJtP3-M6guolKyoxKgUJyfEcH_Yy1pBOu_hs3x90wKSDpEa1jX-Avg4KgwOsJzAMrJHx0LHSaqg9Zg_SUOXZ_5T2lYlnyW_77CIv1h1cYvce4Blt83_UibK3rHkhYKZcKZdCBlfxxJAIxNG4eRNydfDkh9PrGvGQ8gjWodXXpRfXOhcF-El6RuzUlXZDbrpW7NZdmRZiVXuYusMzujJlZmynzGGVkMY3ziZvQpZ745aM1ub74su4liRWGtuAaflW2ORQiygsjQUsli2m-1OHW9h7kARj0q3fDrLPINpSOG3lZ4udoyuRYJamVUZiW81bV5TkzKZcpSEzCJAkIdmCbdmZZVYQ-5f4QQc-qSi3wM2ics1Itf4fCxz0Bqf-eA3k3tEJNkVm6uESnjM3t3T9-Cb0O5i-TxPXObgRnaP4MBuzdlaOkvLfZzuzrQ52gRQm4Ph6WjXflKPV7pBCKW7PZZ2KN15hNEw=w1920-h977"
        },
        {
            name: "Desiree Baptista",
            site: "https://desireebaptista.com/",
            image: "https://lh3.googleusercontent.com/M_k2JSa8o_DvBXxtEk_P64eFd9__KUzWQfp2zlX50R-CqdK7EzkU_E3-EGc8_vy9qvdXp7eFT17prBHIB4HNoGcBECJXEBFCXJpcXTfvZeLwvqGyAUoIygOMsA4X4TCdTRv_MePIM4LtiMHeb3US6aLwtsAwxVq0zAbTeBDCewW5XlHj4rZ2xSyYZbMdjSGM9vhncRYLShYysZ-FurOXLyoXn-vsEx1QpTgFSz0i4qv2QkaOStHgIImNJ7TJN4IHVd3lmf_6Cf2r29wxXMt33NGYgGQq073wTdCDi2CIpX99_Oyi2S8LlpZ9FpOmcU-VGKKFc0D8BUy8iQCaa_dN2joUBVKCIKzqQMx-3yVX0BhvMMqVXag_eeKHLqYld5M69AqLfHZJd1gL_4DPCVnqmkTrLGr3GB7HLtOoh-vaXSGILXcQXhNjM7KphLVKmUlwjJoxZZ3jhJTdr83hETnz1fJVGtpuvH3D56hDDoSn_yIFFs7SuctrM4F_HojZlkv7VZGeazKmllmjbr6aSUVTOCUMDDvJnr7b6c8auMUot-cmJOsE9cN6ylz9jUCisF6YkifyhvCsPz82XwlizIeXWr672JjVFV_UzqonIYuYLjfU0VBsCz5DdSjQhlM=w1920-h977"
        },
        {
            name: "Banda Tailten",
            site: "https://www.bandatailten.com.br/",
            image: "https://lh3.googleusercontent.com/V9IFB5YyPaVXvB3T7YXK12lcV63xb74Y5oOerQpQeaSnIQDQxkQUeyAQhOvolxdZVsSLe4kNOtSaZhofWp3GkRLgE9UoXOtfG1eGwO_1ui9l0nL7d_yEaQwMQRwREdR1afeRHTVRlc5og8Dds6M-kOcDGxChcmHRdoHxbWIHBDaS4ppuvcVY0U5HBrKdGg7ZrBuJIMQT7qpb9Bn-Ru0ctuZXAfw0w8QqnLpyxhQ9YW5nuMeWOgX0DxQg5heE-6zzpiRem1tgBJdtnI_VznbFnt3TOWbswz0fXboQjIhQMqEfD0Qkv9svP5vzKGMbVdpY0pt8aK1hDXn9T7odjCjoHxoDpWCTire7PzAQWgJ5LYMeWg5JTg23yeVcDobHxCk1toXvQVWA8Wl0xut7tDlhTJv4ZoNM3F5giFLUabZapVy4ZhM1kVu3YdmKbQwM1zbSTG0XzJ3B9-IJ-7V-fC4lU8sgA427ogAZg_mqKVd1e40cUA7hGyOstSPVKWLzMTwHiGEGrugNZmfa3QfxRLKOoEmSn2whH8qFJW7dEokAH_FE8JPTy4ZVz7XngF1vJ8MliY3lfxDGfGA5OdX9IlPtXtqHPxrzpS20T4VrJ0LNTKGivOdWLQFtNy-zWU8=w1920-h977"
        },
        {
            name: "Velho Musgo",
            site: "https://www.facebook.com/velho.musgo.marcenaria",
            image: "https://lh3.googleusercontent.com/PTG4uMrkYBmhbKiaBln7NhgeCWvFEJs5gALV2aRBvAr04A7py3rHAiWVXJKy-4uiPsHKSo50QszEi65fQ8DhhnSLJfr2hxJfBzNwDUFvJjaPYmPm-C9rnDL0NX4fVd-vrwA-zSb99T3J6YM9xyaSXh0BE1gbb7OejKZK1G9Ay4yNrvvr0A9HeTD93RFKxDBYVmtamt2MegXrl13u_uO1OCuFcPOU6mclxzfpVzqT9b_lMxJAyiDEJPSUzACOySPR0e9MOLp3m2-gPeubaaeIMOPWvcsONjQH-LjwojI0DSvvrkV1697-H3oA0M8V7OkPwZgHHd3VdU-RYtqQni8V_piBhQgCGinLplWss0SDUpRyyNgIt7pvj0p_Vd-18aEFOgEcQDIa4Mp0sM7Jae8LkvVlPqRt2HqT3RCvSKB8LzeYRJ_wdyP6NvUx8_iwmaX-w1zmqFf9VqA3gNKq-TmBS19ybu3mcFqOtD0DNx0drU_TjIqwgnZoOAC0exIsmrKDXucDZ0KjKb-Wgk8it8-oyjwOm1gIfp648JJtR4zrZAoE44fNHkIsisMQ3_D1EYqwzhbmewwrWwfusRZEaJzBoPEMFCFcQanVD760pw9uWSCbSo__ptTQHh1iGOk=w1920-h977"
        },
        {
            name: "Hidromel Yggdrasill",
            site: "https://www.facebook.com/hidromelyggdrasill",
            image: "https://lh3.googleusercontent.com/B6k7-tl98vkAhQyI18uecwbRqkOelaEKvwT95lKoE4KuA1Fvpb4-nuLvy5tn_VGD4MkkNmKi-yY8LndRvxk2m2icuK6L2G6lotWY1bZ_We_p6fuK7Uy-a1la-gVGAtt2OzdIVQBgDm_m5yPaWjbhYl21ndvYkskuffJdrPe4DdjBARX9YZCZbOm4refmZyDU3kUrhSUh8SZCF57KKdLY-neGqcYqBQ_Bw1VO_1A4N_apEmXDkHnU4gSzugjt-z071oCFBaBvz_IaXnlB3C3nscMET3ABDhbyB2fWGj9PE9gEOR5Ecbhtv9rjvapuVxCvjE_Tk2ovylFWANcSbObtFH2CQpW9rv7UG62UBsH_CZz-yITpM07AsNQBCJbxD9TqxHxvPGQxiCzk0k2ihwsgRTuMObpbNahC_hdKQ23MN4j5qutO9b_01Ru9M1zu27-qTDdMH4LNyCrgyDLamnLTMMIYHbdybwAkodXeYi6xq8CnJJgov4DzHq6QMxRVtTpKjKKKn-Q8eoRzox59Oge1rG1NFYdKMdxaBb4oCHnJe8QASx8EmGpBL8KVM6Mhnc_jr5JySD2GB-6ol4DJYgHAJchiGUAk9Pl6kDJQBj5DeeV_lWUoqhJemf8i15c=w1920-h977"
        },
        {
            name: "Duggan Tattoo",
            site: "https://www.facebook.com/duggantattoo/",
            image: "https://lh3.googleusercontent.com/0a_tyEaStf2s7OLjzInEsCTUcnxulxm8vpO-P9yMCTaIEpOElL9lUussxuXdqh_My9m5i_UefHgNhAQWI80cxd0EBfVbqTvwCu4MXFVtSZvIqZ5moZ39BDtk9AmoFsHUQaGEAEeWMaMa70dTI4AQZgyQzESgvE6qBIOvHnb-vJ0wT_aQEY__mAlOfggSYR5E_GzASi6OBUxud7rAqD2H-QWKjc2j-No1APRGWYbb8zgQI1vx2enRz5LUU8wn5KbwMVBpyxhBRMYMMUdIIODRwUqnAUr4SBhebcdR6htNruk6pvPLgJI2lcCqC9-Af0cBo8KoBBHehlurUwOABM58tDM4v9S5em_I1bB06dnAGZBj_y7R7usCIjAnriUNJK8Nrr8aLXIvzWkqBkHMI_JxKNOMP6fxmYBcgK2ke16OTn__d4CHU3GFyyA-wf1hpauG5QoMsp-9-UVhSOgdQc3PEVEHDWcmWGYM82SFvEag9lR6wRioVbgjL45sgCgWalXj9FIP2ftTohNHYXuTFp9rbXl3IlRtoDDI_ZvWDRJQMJpLA2cmwP-Pcs58kJpXu7rROurVpUSzoRynJwOFHxCV5MSIOsZHKL-_hB23Gy1_TrvI6dO0GqzSoT8001M=w1920-h977"
        },
        {
            name: "Cena Medievel",
            site: "https://www.facebook.com/cenamedieval",
            image: "https://lh3.googleusercontent.com/AvhBmileUBH2Osr9gtj-8ZZTOj68WiOQt8CxlRMNhTU2qDsk5VhxdwtEjEoblpz8i76F_SUc6zoCdmHcv6mptAIhNKYx1mnoACkzGtShS6L4eD_gIneXTqF81QvOhEcqjKAeDdMeqv0EmDLcmL-cArFgc8PjCNkLXSkQGNpYHBphoTuD8gNIOazpeUAT4LJclMr2tiYInL50c5lGIYtLwaH4aXkgvZj1P7m551WIfIXOIGgULsOIFJnLfIQY0lu28YhqkrTE8QFAlA_2IRTveZxGSyO-ZoAOAZrJ9R9jrnlyExON045XaicydUq6Eqq4PsqciLWHee6PsoINfHoUf8jP4ZsyoStHjcH-A08tUZIfWD0_nXSOED78XzyGabemwKbYkyy4-LkC_komhaIRpd5AkU3PXWth89FnmJFd6wa4eatDfyeCSOcC3pPo5YvLDBkRuexswNcEICoWdqa2_-wLE6WjHznNpcpLRmMMEWJc41lWmiq3dbNoRty1YYx85nHzgwBiGE_MlLy68QymFVZzFqaxW9812GWT6-6oA7gm_QI6s-d7xmDSfr97yMnYsluEyruIwvonPM4gJhBXrIGVIMXQaA4TM1a9YBjQCVetnKicCsq5dLSwG4w=w1920-h977"
        },
        {
            name: "Vezzani Couros",
            site: "https://www.facebook.com/patinacouros/",
            image: "https://lh3.googleusercontent.com/pUJdsH_6JNiXN-1UAXd6e8acjl0HxFywTs-C-heA7dUvUPcwoA6PIOcrYdVx4jRqdyCN-dMSLzj39Iw5jOeb-px7nribrJNPEKRxOa3r5zy-1nyzMd8Qq5qIOPZq5Ai_N09f9X9piGDiXl7VZmhGicGT008SR3vhlWfS1COw5aMR03MA6-uaKt4rOnooK0O2ufw-zf09vCD5RdH33QqhhgmxFRhrZ5GH5etxUwF5Az5pbxVNFDagoOC9xNa2cik4UkiOr8X3FZqhe0xY034x4sqDhlzbHDDBJ8JknbKQw_MH-wO9Z6iFOJUPo46za62T7XRW2i8kLreQIETHLd2OwsqConaT6H4CDyAO8QNBPKBL3nn6y_rm54BjaTeYs893DYrXG2rdbBRr65wDt18MWTbnwzx0sjbeI8EAG7BMHy2ZulE2AdMVzlRHW2QLoPRflY8sJzdJhQHorhsPOxd-XgX5SpYMsVlvJ8SLkwQoJQjY73_xtAeR5ujFyrqiRY3pHrmYK3dmeNuzIFFcG835EkJQmDq93vDdh6qsbToDAGYTTCMiI1hpJXgF0Gso0ni6tC6Fb6wIyaI3B7DM6hqfWgANOti0iKObHJXNklM6a4MiWSsKdUtmH8RKFNY=w1920-h977"
        },
        {
            name: "Nýr Vindr",
            site: "https://www.facebook.com/nyrvindr",
            image: "https://lh3.googleusercontent.com/tH0UrfNToBWW26UeH8g8uD3WFgwiuBqJCVNoyB52NODfaFv_WfuaNuAWWdd7tAVgJrMj7aJXCvePOAwdLpxhEmeCjQPAYMm3F5-9wykmq2IrV8TPAJlEIRcU7W17c2OTv6GTDfPPxBL2E2Y43_CUWq1TEYG8vjYJ9JQq_cjE1UAzOl_-jPPPbfU5bEy3P3crYufFeCc_BTFSbtW1mZdiJIxF36sMjXw36eypFdycM61IiiMSOvjODImOkj4dGFgvlqVbTuQx6PQSBpi-QvUJ9ABJy_6ZnhC1xSEPWGpU71CwkRvZFNMTf3h6EBTB7nV-mrAz6o_Rl4l28JpounxpXaeY7o1Vaz9CVvsDiMqG04tWhooFfyNNQI-aCFSaK2Rlw5GGILKY9pN3Gx71X1ELoq4ABK375K4IAMojUQAEvuVy0HAfPvpp5tSAfOuevvh5Vj1Gi8Fxii5TpPet85LXhu4FZJx89O68cXxAzGVwioWpoq4x-CsEwNn83Oj8ey5yQXuQvDIbj-5FXG2IgC6NXyyTolWtf5PKcu7lYdxq7vFQrYOmZU03NH22aR9J09jSk9S3YJyq9Mo3YOcczL54-aDdkU8F-PImjOrZCznF5qbJuQKHevSKj_zVQK0=w1920-h977"
        },
        {
            name: "Agenda Folk",
            site: "https://agendafolk.com.br/",
            image: "https://lh3.googleusercontent.com/rE4prRZjMCd8_vYq34nXh-we67CULiEA7C1Iuh7B4ypdIQXE7nnYYgEB55hyjgPT_2Jzn_Y8NVmRDbAQkqgfrxViLZ3BEBpAOENsCe_Ax_CwdQZ1taU1rCrmFU9V1-11k7g9KgUicgiEPvvCKCs11amvkfZoQKG32XYYvScePj921BBWFFniYcu3A2GVpXRI6SWWAfn5bSAEld-GhT7gbvFoUy0MefmyB2_SHWRoMwDDPseptTTmC5cSnwUP8cfuLLyxhIB6IeHwLxlvTnnU6lK7t3bx33L76qjSmMx4p9ZHmAsvQm8nJCV4-url8q56giWpHpHGkvACwe_gjptSW4ArLVDK7Sl0mjFKZJJ-aAfpesRgp_jpJyA7k-mBBnv6KSY2l0YJUjykJ0DnfiuOXy4LnaE_qJLFp6eH98dd0i9n7saQWWj1eJJ_q9fD8GRd2gsgKgcN4PEZUUtBqVCy-kwiXOgV8ZenuLck2K1dQj8M7Pm4k-j7qHKcIbYcsXLFQOjU3ePCyzxrpAZ53pBu_g5LYoAD2HGQ9Re6qbzovRVD3yNxNC1zIbADPNqSawIDGI6KGj2WmKxEcGUHKsiQeM00AyKQgdLaNUVjDOkYPZQF4CDq0ME_DYx0TLQ=w1920-h977"
        },
        {
            name: "Livros Vikings",
            site: "https://www.livrosvikings.com.br/",
            image: "https://lh3.googleusercontent.com/qriz5ahCHaysqa1ywlktreyQhoXJphl5raTTENRD7lBBz_0zeKeBJG0zlD8JzRvhLTD8FrbaB9NXMH5LS2qL-g_MlG1IYh2Lr49fcGRQcYKOUVnItmG8M93M84eV5KoIU0efGji8R5qhqpTKa7QJwEmXCnMIowsj3pWVpXe_8r-JmgGr6XronuKYB1W9vxfF27CPOThvxaFfs8ylEiqCGkUIOLLMxLFEzsLMb6iGYWWNTI3yzruBQVNB-22kzI-V-5FpaXLAwMYtvpaClY5WiscOrfhfirCaYoOddUTLxnh7Ug5erB-j4LoSguDXBX4tjY8-2b2Ry6uiqa6pr_MsGzqUJe8539gvljuzDH10QXUcn793mhKLI59pkCpWWumGG_J_pNHfqBrhm2hh1dXxzsaVlTNKscMG94VkyO5-NzsXEUpVzmZusPCDb6NAi-EkSZH0OyZuf77lfweASmF226qhYlQHmSd0JlGGsBRuUNPap2GZNOH9TverRD2yl0EZ4HFeMN2BhY1LSJlYMqoZjfE7wRAHhHhqwwOzwQGcAFGmLhjaYqyTz4NXExs7q6EPqJfRlY5qaM5ZaJbAh3wb2mJJIRIrkj-3dQOsR_h51pEa1hgTqqJBSDD-AUSWZKH_19orEEwPmAJr8bbB6elZVh6zYxmLtSzOIORdg67hxg4BQPJv3UHOsX_qCBYJICs=w1920-h549-ft"
        },
        {
            name: "Hednir Clan",
            site: "https://www.facebook.com/Hednir.clan/",
            image: "https://lh3.googleusercontent.com/cP3LK70hm0OjB3QZEuIxG3q6qf9DEj5q4tl1V1xfsLoiiXixVkC5st71j_iF-XaZLpZavwhbAlYSwADSXuzfoM4-cb48d8cCmGmRtTpX3-7zNxUZhqcuOlkgLWzUX4v_OqbplRbaZCgx07R-Y06CJpJsaKmnkTa_xXpD_fnWqIKLR6kSAndYEs7bNOLMIHb0otss1MJWTIpmzsMCQzzIafMCIjobDBep1xhz37ED5R1f4na8b_lntDLdoAqBdopcz42YEuGGa8LodjLd-UsDOw_IxwMm4YP8rqwqZ_5guBfQHQn6sfPUA7f2URVO3S9q0azMhukgG_YE_wzkh4dGY454zrhxjs-P7FocgPOjiTiKdfiJaI5lBnd9waFoyYO5-fjND9Zvy1YyIi3Q-KKaJPbSj9YeW_sKxxFzW-9EhxrFzZUUJLkEjuQP_BCs04W_RdQFxWPs7OAg3SgNw8LUI4R3fnqpNSkz9qqQZC3em25Vk3YDaZYcgVAsZS4d0o_v9sLQgWoB2tT4M30bW93FmiCwEuG2Oy5SnPtGPSTOCbEjk_N00FRPMkMwFxCxb9aPtCRI3b4o2O6tpIXpkVQXhqLZWf-VzcKhAb1hrBXXI8TJ2kU2XbHb4lATcRfluYFHtvH5qSG6aMoSV1D4_K5ROCMRoqSypJArsJ8Of1HOXOXRLcj_UhFBYWK1VrQSUZg=w1920-h920-ft"
        },
        {
            name: "Machados do Pântano - Myrrøx",
            site: "https://www.facebook.com/Machadosdopantano/",
            image: "https://lh3.googleusercontent.com/gIdBzCTeMTeYQP1MROKzswPzi1E9GhwZe1gH0HxV1GCLNAzQbxdC34vadvJZWEXQGb1K2Twv2Fo9wNLm9w8iQc2qG6xOhNR4VMPrvW236Hc5wcRFWbVFd8y5Uavd-Eii3daH70tMM0QWp7HJARGhucMU6xT1wAqoj4A43NVBQXeALB6AcvwvukHM2JTEpgCfQ2NuYjFQR0I0-uluRdLmdQbLMCOiRr3tZrQ1qyf_39yHu4KOu590gCF-NBukE0yKoWzPxmW7a6k7uQnkr9lYkw9xJk6ejNm5eSM0ju97lm9vU7XVyOLQ9YheCeX5VJUrGmRqzuTumK4xapLHUAWhxtag_HOCDwo-FFp4ovQv8XI0uOHumGuXUcOwroE73MeTBcZ0S6yASf6j880mlBaq9DmuTY41Me5SRVJj_pY6BPVIQyf2qcgxcVH2tCHHNuKiPHwR1ZDwRgE3x-s5q2fkXX3q8fXat-1y4rHmDUImSQxvzkGPUmGbLWpXywQFShPdQsEYkhGLfbej_MD-vAs2riY3ego6b7wsqD8GQD0vwBkw_p38Pki9IVM6XwabDoG4lpDCPH0XFWP0e_EI2vXVXOFR1CVcdxUvIQVKP2PC_mKdan-BP2EierqzWdplXlY51S1D_iqZbuoCJtfX1Nfg33gjVZcb8oldDF_cqlKtRBE6ocAkip-4kP9To93RtLE=w1920-h920-ft"
        },
        {
            name: "Antigas Serpentes - Forn Ormr",
            site: "https://www.facebook.com/antigasserpentes/",
            image: "https://lh3.googleusercontent.com/XVv9U1nW69JEL8CptbNm1kJuiD0sLiboMgawRR7TLfGotLULc4H7jNDvInINmNzvIGnv_3nj-ddlDDpggTUB3BBaigIl4IamaleMMoAGCbPfAWxjqJx-wLcraGy_WRxmecqP_bfTYRLCNjzrgJVoqwWFX8SE-2yvRvbFr2Mv95G28ox3QCqIBlO4Rx2RmZsmmIQoa9xPtOth9cYC2Vq2SRRas74zzvvHF6tGWbou-adm46moFRoBIFf3fzVTeKwtmQoes5sJBWcHNO9QskBo8htrS0lD_xP1_MSi0nMcjoIcPB35kH_YSPntKqNRuUEVX0QY9Nzc-9GvLl37wxnpY4IsWUe0C0jWwEdd2_b0Z-cHdqzoFN2pUtKN-hQjaIqdZ2KrCgBaaYP1xbbXShhG4YcsotCayzpmcx-nES7dBoqh4yxDlxFf0XYONnJsh7ni5rPWn3cJp342P95e7aALRvao5SXzzYs6OcOLOZWv0aq2E1FVLud9txMRdjxrWAraF0-sn89fP0jHD1obOim1w5Br2iNY19FD0LDHa4v6UcQf1il24TspKPRhrVk2LPTYfZIEYgSH0gh_fRESgMxuavEMjrThcGc9jEUMbDVKyi2KNva4nctywttT2vBKECjW04GoYSJY_cR-xyQQCYNkAGnszgtXeoUjL0auoeII_Bl7d3aAhHZ_69HK7rWn714=w1920-h549-ft"
        },
        {
            name: "Haglaz",
            site: "https://www.facebook.com/haglaz/",
            image: "https://lh3.googleusercontent.com/U-NYdda_wYj9ehRvVOSUoEVK9Lp2P-wC3F-PjHnIn7mzWFQcNZLCDdfGa_aOuP7ruS06bHfA5I1R4DedUF6pMkzDt4jcUHjH5-hq4UXzPDJWaRHRrh2_xNQF1Sr20T1jc3vY6uzLqCV5xy_37K-T78CGFa95n2AsmlXERrMCLh6_ZFaue-aKDZX7ZNGWIH5TNxXTRfXqKuV7hMmMEjJQH9F4ijwRpHQODaUosZ_QqkagGW7KhDZ5L5yD-ZsUsASo_FxnJkpkZv2AyocESMBI86JYKf_G_EMTf-EjoJKKvDoIPME-zLi3VTcdrP6ck4clPqqJcZGOIK9rZJ2ZhIH2wrT1FAftZWieYvNezW0Wdhm7BiwKySh8dUfbAbnmSDocSf3T0xaWILWWMChZwKF3qdH084GVZyvLasGkriyyPaeCj13jY-HTSztAR1wLhIjYP0k6opD75uVefK8GjYPr9XmOah2pEEooF7urdLYbwvXbR_7ACh4KHY4dZGaTxL7ncSq2HoR6bkBkJY4BJRcMgw3TIfz8uzdaR3S1YAV2Gak1VMHEp8bzFGlTgYcmYQ8AOzPvIwFHJdzPpl8U8ZyONgS5DQuneLCKZgKvYNPxiKRnk9pN4p65XlssELQpjK9tf-_n7aioWOFiDxUoWOUPNRtRsLolKCc7oCdLVll_0csWLWK4e7JkSLmytMqL0nQ=w1920-h549-ft"
        },
        {
            name: "Tenda Hrafnar",
            site: "https://www.facebook.com/TendaHrafnar/",
            image: "https://lh3.googleusercontent.com/oKdUKRoiGg0wwRJkOUjtCUwWVpge0xBHul0NT47ssfSuX3-5IQUB7CQiuT0nurS2seGl4OBlNlpGkDb95NlnyFjwGimqS5hla8XJJ5RklotslUana3Zsgs9-ruJ34UbYV3syNLhENhbvccetzVDZR5WIurC9ZxAw7mFIdfZ-SsXEcV1wdAocXufAbnwNA-fSxvXi2IPntDC195jd-Q13K-x46rLb27wUrgwIwH4uJJWwsnYl1u-Z44-Ucumithdp2-48Ck_rMrD466nkMHKCqL4OlN44D6oGzPUoTSdm9a1Qz8GjrBFVD69ENovLDtCdC818xSSPrVzNphQQx3dDWX1nwwyDhC7wHmAnZtEofY0lAG3y6vBuT8HIzSMS4hG3zRpL4VEuAK5qdji7H1WUbbWUzrZmSBHIvLAmJJ0NLqqsoP7YcqYaBTNU7Mdxp_COlg7XU8YqGVS-l18jCf0FQ502RteS47kn7jorbemsarwNVbGDcUY6XzGbtAnQ-39JEMML042FmIxD1FJW1dx-ttzUrBgiHQ6REiO3gvvAKX5R3TIQfX-gbz5VoOPaArfPhfcfs-bcyq7xEE30x0XH2_zOEduGGSlcfGvw16Bz5FbfO0V2hdQZxBkjNwRF6MsG-Rc7QRa5q-aMmZ4Rkeh2Vbq7LiAXc7cL3oYjdOu_knzXwcWTqXqWXvaZ_ingb7Y=w1920-h549-ft"
        },
        {
            name: "Hersir Store",
            site: "https://www.facebook.com/Hersir.Store/",
            image: "https://lh3.googleusercontent.com/VPaKY5eJAF0-I-3z7i3I7rq8wu5IecOgBH91pTAOGI2U4oEnwG8-O63p4up5qaj7rxejxGljhy0fqpbu6BGnqpAzNhAe5PhTHC7QFpBdDSTvAKDer90NO7Pw15Ktf7Ynk_JipSJOESv6n_tVNEWIB9mMHeVH4PqMRI5AAvwzuCmIJ9CLizvPrtY6xAMlW5HapkgGM4ZHuwYFL6a8upwJF06MGrDP1DC0knjJCBcKM2rmZgrZngym-zP5aJfDWfSXTL6GDGJtNtCvb2O2UO2AVQ4_fBHoY_lQzbWLwZkEBC8teEpAmNtLM8tRfB3ZAmcpmcBGsOqyajIoelIX32xasekKlu5xrc1Nxrr-emToQ1HpvWxdpoP1Temh4_4IfJ0ClUMob5Iiqes2XIFyFk7hzeM30qQYONNEfRP0bnGd1T-oAelS8HwgDRdRCUlnf_ujaG0TBemOh9-calVMQ-LUklBtHN6fEpBEEl-2Dpr7ylNNBcGM-cqdWfFaVrB868b0OwKJcpFx6RRx0qyscoLIDzNW9MPBaEXo948JtMX8uoRxMa22IaBQoCZ00ppKkPpscXAy1yR24-M3Sg1AMjbMG-cpuTqT9lBaDyoUbtVcx2pRljD-3V_XibgsaoS6f6e7ONJWPD72wmYIecN1BMkDbJC13_jpSa4dQi8ovgYGLeksdA7p8DTdfwC_lsll7iA=w1920-h549-ft"
        },
        {
            name: "Hjörvarðr",
            site: "https://www.facebook.com/hjorvardhr/",
            image: "https://lh3.googleusercontent.com/FHVMKN7ROsJcuN83RkmapmsXuKNbCs5ZDceSM1kQ9voqc5qLysdNgUeN8IcRCX5t7VE1slrGBMGgnNJQ3seqqcdb6X_YBLuutaK0oqIejHoyh-WYUqpCuJ3loPwdTFvJ5U_Gq3aDvyT5JbqL3LIgGpek4-s5f8Rr-ZgxFZcDvy9VMcgfayULQl_mWE_qepxniBCzy5Xok9-8on2BJmj-uQcy-vq9EKDKe5A1khIfoMOdw432hjYJ0zpOF4iM5vlima7XmgpcQUQR5cIF_597YuW7YxYVxFJSYmo2aXovUNniVGxG-7FtrEkvy-z9I8sRitUBkm93kBaeHBr0r7hej8qI9-cGPWKxiUn2oh20ALUgI6PpGQrx0jkzM2NedrVBcuteZlihP8KyfBt1v0C3Ohx6udLJJsKQCm0Z77UMdbCmtFFoEnR-Wz6Roa3YU4gw3FpYnkGDzeSEpfL_4E0ULZibwu1R53Ur8mvOa4hIPjCNP9PxplCmLCOyMN1Gn_iI7PwCdofVzj0_e0qLWibMBoQjQM_8p8GYHnAVPuucpfUX9mJkcpkL5Plz_JD8I8vAenL4IJJ9VIhbmW6vjlNVhuXwIUFstRkCczwoQhwgGGho0RZWlzLT2XvIkKoSdyw6YBHVotX1gqXeXnQA6cQ_wzMiQpMwiLq4O_oYv_9zumR7kuoqq98nisB5H5HM_fQ=w1920-h549-ft"
        },
        {
            name: "Lobos de Guerra - Combate Medieval",
            site: "https://www.facebook.com/lobosdeguerra.recriacaohistoricamedieval/",
            image: "https://lh3.googleusercontent.com/MzAlBhnuMm3K0hlorhRZoeH_P9b4TgdhBtJMeluOEroneZoFu11Oh4Z2D0NRRqr-j6zv_D_bRG66WRGtxcoZE8xtqZzsa4EsPVsDnMCm7BiaYraWc4AS_b2A3NtF05W7XSVH6nOIlzG9zx-qH1jsqHXBuN4M-XM3tpC55ZNLfF4Wkp_HcUZUy2YB2qa7n0sWJ1gyWFLHATET2T4iuS3VGLG_RdfpAw0U29-lA8e_PgyQlVY8Df-LXaWGOyL7F1ETfAe5WgVrF_JfjlPD0LV7rxukmRv5yI01QT3XlzJe-vByl9J5rE0lhN8LD3lbnA4ki93coF1kZ5ShOm-ss-PN2fAfK1gMWrsoVynm8eU20IyLlebpyvtzU_zOlRQjwk6F1w9GmatukQFkeKkjO8yWOW9XPh-4ICkEO3QvQ8qNtVauHSOYUKWVDRKNCmqGBRo8ZfVeq-Cofr5vhKiuEQuHryC0VSfE00I5aWFG48E0Vfx1o6DaN8O8Fnj9tkhxQYU3vNy8pNYFHpwZe4eoQBGN9DseAUP--QLnjL2QqmHxuHH7eBcOWRAWk4yHwS8tSzinUcGDgwG1q6mLZv-_nQKfsD-rkHfPuUxrfkqCwJFmSPpqpVAm6yHIEsuU8kqMaI_KS1J9W0SJcRvA8gA2tRWe1Kt1QE76ibKGGcehbp21Ggu29CSkUt4_I4qiV5WZ0ts=w1920-h549-ft"
        },
        {
            name: "Clã Skjaldborg",
            site: "https://www.facebook.com/skjaldborgcuritiba/",
            image: "https://lh3.googleusercontent.com/DeZGBDuuR_WP6DdMRK_i2HQ2e95uky6aa2yIRIraRXv6B6lc74KyDXa-aMUl0_ttwj66Xck7W4XV0mcoZWwquJe8367hFfx2iNsPjoqUZx3snSWqdmSZKnxgdthZLbax8SA03IcA3gLBNwdHo38s9Fws58ww2hJjgU--3d7LJdtf8fA4liUxPrT1XxVRjhlw6eyyeCKxb8_2tcX8n2d0tHs0na0PgMjYaBPfBWZnMpTMXoxhCsVQ536ZUAkehG5_7tuu9ayW_UDU8KLzp0ofqkQ879MTHfOoxXnDSIsFx45_04AkasYDQ8iPYWwrWlAniJv9UmHu2QGFsDskMd7jD4UgfXtzjlEH4X6OszkLIQASNCc8UUqHfTg1oIyZHU-_BuLj54kTMRTZtUk9Y7M_ZshMyZ1SwT7Xay_ArJKmUiCjDnDFUzJUt3HQHR8NTOQXN8gU-PsPde4SyNGrGYQx_dMHDFhwBYNHTKXg1T46tw82QzXwAdIwvJ9JUxJoih8ReXJJAaD1TX6lbeRAYXBEIbEB7tMb1gJ6UDcO4kTgyOCk5J_rGuBtbXDmKiaUZ-h37s_AW0eO-bV68a4I-xJ6pnWb_OUA7k3Kb__-5sR5kqxkL1N91oE1W23atBhU4x8ByvgnzRa6KDepUawAbqFttkcNls49FceRNCsMARqn9j2dBS1Z_2bie_ph-oBmCFk=w1920-h549-ft"
        },
    ];

    render() {
        return <section className="sponsore" id="section-7" >
            <div className="container">
                <div className="row sponsore-body col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 ">

                    <div className="wow fadeInDown animated" data-wow-offset="120" data-wow-duration="1.5s">
                        <h2>PARCEIROS</h2>
                    </div>
                    <div className="wow fadeInUp animated flex-content" data-wow-offset="120" data-wow-duration="1.5s">
                        {
                            this.partners.map(m => { return this.renderPartner(m.image, m.name, m.site); })
                        }
                    </div>
                </div>
            </div>
        </section>
    }

    renderPartner(image, name, site) {

        return (<div className="sponsors-logo col-lg-3 com-md-3 col-sm-3 col-xs-6">
            <img src={image} alt={name} name={name} className="img-responsive" loading="lazy" onClick={(e) => this.open(site, e)} />
            <p style={{ alignItems: "center", textAlign: "center" }}>{name}</p>
        </div >)
    }

    open(site) {
        window.open(site, '_blank');
    }
}

export default PartnerComponent;