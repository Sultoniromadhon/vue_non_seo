<template>
    <div class="pb-20 pt-20">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">

            <div class="bg-white rounded-md shadow-md p-5">
                <div class="text-xl">
                    MASUKKAN NOMINAL DONASI
                </div>
                <div class="border-2 border-gray-200 mt-3 mb-2"></div>

                <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 rounded" role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>Mininal Donasi Rp10.000</p>
                </div>
                
                <div class="mb-2">
                    <label class="mt-2 font-bold text-lg">Rp.</label>
                    
                    <input type="number" min="10000" step="10000"
                        class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-15 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-2 text-right text-xl"
                        placeholder="0" v-model="donation.amount">
                        {{donation.amount}}
                </div>

                


                <div class="mb-2">
                    <label class="mt-2 font-bold text-lg">Do'a</label>
                    <textarea rows="3" v-model="donation.pray"
                        class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5" placeholder="Tulis Do'a/Ucapan">
                    </textarea>
                </div>

                <button @click="storeDonation" class="mt-4 bg-yellow-500 py-2 rounded-md shadow-md text-base w-full uppercase font-bold focus:outline-none focus:bg-yellow-600">LANJUT DONASI</button>

            </div>

        </div>
    </div>
</template>

<script>




    //hook vue
    import { reactive } from 'vue'
    
    //hook vuex
    import { useStore } from 'vuex'
    
    //hook vue router
    import { useRoute, useRouter } from 'vue-router'
    
    //hook Toast
    import { useToast } from "vue-toastification"

    export default {


        setup() {

            //store vuex
            const store = useStore()

            //route
            const route = useRoute()

            //router
            const router = useRouter()

            //toast
            const toast = useToast()

            //state donation
            const donation = reactive({
                amount:0,    // <-- data nilai donasi
                pray: '',                       // <-- data kata-kata/doa
                campaignSlug: route.params.slug // <-- data "slug" dari campaign
            })

            //method store donation
            function storeDonation() {

                //check minimal donasi
                if(donation.amount < 10000) {
                    toast.error('Donasi Minimal Rp. 10.000')
                    return false
                }

                store.dispatch('donation/storeDonation', donation)
                .then(() => {

                    toast.success('Transaksi Berhasil Dibuat!')

                    //redirect ke dashboard
                    router.push({name: 'donation.index'})

                })
                .catch(error => {
                    console.log(error)
                })
            }

            return {
                donation,       // <-- state donation
                storeDonation   // <-- method storeDonation
            }

        }

    }
</script>

<style>

</style>