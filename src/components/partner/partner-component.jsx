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
        }
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
            <img src={image} alt={name} name={name} className="img-responsive" onClick={(e) => this.open(site, e)} />
        </div>)
    }

    open(site){
        window.open(site, '_blank');
    }
}

export default PartnerComponent;