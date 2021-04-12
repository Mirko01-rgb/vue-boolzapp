function initVue(){
 new Vue({
   el: '#app',
   data : {
     activeIndex:0,
     newMsg:'',
     contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            imagines:'./img/michele.jpg',
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'

                },
                {
                    date: '10/01/2020 ',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    hour:'15:50'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            imagines: './img/fabio.jpg' ,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 ',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    hour:'16:30'

                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            imagines:'./img/samuele.jpg',
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 ',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    hour:'10:20'

                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            imagines:  './img/Luisa.jpg',
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 ',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    hour:'15:50'
                }
            ],
        },
    ],





  },
  methods: {
    contactClick: function(index){
      console.log(index);
         this.activeIndex = index;
    },

    sendNewMsg: function(){
      //console.log(this.newMsg);

            let newObj =
            {
              date: '10/01/2020 15:30:55',
              text: '',
              status: 'sent'
            }
           newObj.text = this.newMsg;
           console.log(newObj);

           

            if (this.newMsg != ''){

            }
      if (this.newMsg != ''){
      this
      }
    }
  }




  });
}


function init(){
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
