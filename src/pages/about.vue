<template>
  <div class="main-container relative my-0 w-full overflow-hidden bg-[#f0f4f1]">
    <app-section>
      <div class="relative flex min-h-[820px] py-[60px] justify-between items-center gap-[60px] overflow-hidden max-[1250px]:flex-col max-[768px]:gap-[30px] max-[768px]:min-h-[unset] max-[768px]:py-[30px]">
        <div class="flex flex-1 flex-col flex-nowrap items-start gap-[20px] max-[768px]:gap-2.5 max-[768px]:flex-initial">
          <div
            class="relative z-[2] shrink-0 text-left font-['Onest'] text-[58px] font-semibold  max-w-[581px] max-[1250px]:max-w-[unset]"
          >
            <span class="relative block text-left font-['Onest'] text-[58px] font-semibold text-[#323232] leading-[1.4] max-[768px]:text-[32px] max-[768px]:leading-[1.3]">
              О проекте
            </span>
            <span class="relative block text-left font-['Onest'] text-[58px] font-semibold text-[#63845c] leading-[1.4] max-[768px]:text-[32px] max-[768px]:leading-[1.3]">
              Душевное Здоровье
            </span>
          </div>
          <span
            class="relative z-[3] flex shrink-0 leading-[100%] items-start justify-start self-stretch text-left font-['Onest'] text-[20px] font-normal text-[#585958] max-[768px]:text-base"
          >
            Мы помогаем людям справляться со стрессом, понимать себя и жить устойчиво. Бережно, профессионально, с
            вниманием к каждому
          </span>
        </div>

        <div class="flex-1 overflow-hidden rounded-[20px]">
          <img class="w-full" src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/B3OaUjDFYP.png" alt="about-img">
        </div>
      </div>
    </app-section>

    <app-section class="py-[120px] max-w-[1472px] max-[768px]:py-[80px]">
      <div class="relative z-[53] mb-0 mr-0 flex flex-col flex-nowrap items-start gap-[20px] max-w-[1075px] max-[768px]:gap-2.5">
        <span
          class="relative z-[54] shrink-0 text-[50px] self-stretch text-left font-['Onest'] font-semibold text-[#323232] max-[768px]:text-[32px]"
        >
          Наша миссия и ценности
        </span>
        <span
          class="relative z-[55] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[20px] font-normal text-[#323232] max-[768px]:text-base"
        >
          Миссия «Душевного Здоровья» – сделать квалифицированную психологическую помощь доступной для каждого жителя
          Узбекистана. Мы верим, что психическое здоровье так же важно, как и физическое, и каждый заслуживает поддержки
          на пути к душевному равновесию.»
        </span>
      </div>

      <div class="relative z-[56] mb-0 mr-0 mt-[40px] flex flex-wrap gap-[20px] max-[1439px]:grid max-[1439px]:grid-cols-2 max-[768px]:mt-[30px] max-[768px]:gap-[10px] max-[680px]:grid-cols-1">
        <div
          class="relative z-[57] flex flex-col flex-nowrap items-start justify-between rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] basis-[456px] max-[768px]:p-4 max-[768px]:rounded-[15px]"
        >
          <div
            class="relative z-[58] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/MHrYadBor2.png)] bg-cover bg-no-repeat mb-[99px] max-[768px]:mb-[60px]"
          ></div>
          <div class="relative z-[59] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch max-[768px]:gap-[5px]">
            <span
              class="relative z-[60] shrink-0 basis-auto text-left font-['Onest'] text-[24px] font-semibold  text-[#323232] max-[768px]:text-xl"
            >
              Профессионализм
            </span>
            <span
              class="relative z-[61] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[17px] font-normal  text-[#848484]"
            >
              У нас работают только дипломированные специалисты с опытом
            </span>
          </div>
        </div>

        <div
          class="relative z-[62] flex flex-col flex-nowrap items-start justify-between rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] basis-[456px] max-[768px]:p-4 max-[768px]:rounded-[15px]"
        >
          <div
            class="relative z-[63] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/t1SJF7nP4A.png)] bg-cover bg-no-repeat mb-[99px] max-[768px]:mb-[60px]"
          ></div>
          <div class="relative z-[64] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch max-[768px]:gap-[5px]">
            <span
              class="relative z-[65] h-[29px] shrink-0 basis-auto self-stretch whitespace-nowrap text-left font-['Onest'] text-[24px] font-semibold  text-[#323232] max-[768px]:text-xl"
            >
              Эмпатия и уважение
            </span>
            <span
              class="relative z-[66] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[17px] font-normal  text-[#848484]"
            >
              Каждое обращение рассматривается внимательно и с пониманием, без осуждения
            </span>
          </div>
        </div>

        <div
          class="relative z-[67] flex flex-col flex-nowrap items-start justify-between rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] basis-[456px] max-[768px]:p-4 max-[768px]:rounded-[15px]"
        >
          <div
            class="relative z-[68] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/W2VXU05t0C.png)] bg-cover bg-no-repeat mb-[99px] max-[768px]:mb-[60px]"
          ></div>
          <div class="relative z-[69] flex shrink-0 flex-col flex-nowrap items-start gap-[8px]">
            <span
              class="relative z-[70] h-[29px] shrink-0 basis-auto text-left font-['Onest'] text-[24px] font-semibold  text-[#323232] max-[768px]:text-xl"
            >
              Конфиденциальность
            </span>
            <span
              class="relative z-[71] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[17px] font-normal  text-[#848484]"
            >
              Гарантия полной приватности ваших обращений и данных
            </span>
          </div>
        </div>

        <div
          class="relative z-[72] flex flex-col flex-nowrap items-start justify-between rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] basis-[694px] max-[768px]:p-4 max-[768px]:rounded-[15px]"
        >
          <div
            class="relative z-[73] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/F5Uw3rMNHT.png)] bg-cover bg-no-repeat mb-[99px] max-[768px]:mb-[60px]"
          ></div>
          <div class="relative z-[74] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch max-[768px]:gap-[5px]">
            <span
              class="relative z-[75] shrink-0 basis-auto self-stretch whitespace-nowrap text-left font-['Onest'] text-[24px] font-semibold  text-[#323232] max-[768px]:text-xl"
            >
              Развитие
            </span>
            <span
              class="relative z-[76] flex shrink-0 items-start justify-start text-left font-['Onest'] text-[17px] font-normal  text-[#848484]"
            >
              Мы постоянно обучаемся и расширяем спектр услуг, внедряем современные методы терапии
            </span>
          </div>
        </div>

        <div
          class="relative z-[77] flex flex-col flex-nowrap items-start justify-between rounded-[20px] bg-[#fff] pb-[20px] pl-[20px] pr-[20px] pt-[20px] basis-[694px] max-[768px]:p-4 max-[768px]:rounded-[15px]"
        >
          <div
            class="relative z-[78] h-[40px] w-[40px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/Yqtn3u9Phe.png)] bg-cover bg-no-repeat mb-[99px] max-[768px]:mb-[60px]"
          ></div>
          <div class="relative z-[79] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch max-[768px]:gap-[5px]">
            <span
              class="relative z-[80] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold  text-[#323232] max-[768px]:text-xl"
            >
              Доступность
            </span>
            <span
              class="relative z-[81] shrink-0 basis-auto text-left font-['Onest'] text-[17px] font-normal  text-[#848484]"
            >
              Стремимся убрать финансовые и психологические барьеры на пути за помощью
            </span>
          </div>
        </div>
      </div>
    </app-section>

    <app-section-fluid class="!bg-[#6f8f6e] py-[135px] relative max-[1400px]:py-10">
      <div class="absolute left-[137px] w-[68px] h-[68px] top-8 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/g8znE0HqBm.png)] bg-[length:100%_100%] bg-no-repeat max-[1400px]:w-[46px] max-[1400px]:h-[46px] max-[1400px]:-top-2 max-[1400px]:-left-[3px]"></div>
      <div class="absolute top-8 w-[68px] right-[590px] h-[68px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/AzEwL7Onsf.png)] bg-[length:100%_100%] bg-no-repeat max-[1400px]:w-[46px] max-[1400px]:h-[46px] max-[1400px]:bottom-5 max-[1400px]:-right-[25px]"></div>

      <p class="text-[40px] text-white leading-[1.3] font-medium max-[1400px]:text-xl">
        Платформа основана в 2025 году доктором Санджаром Ахмедовым. Идея родилась из осознания, что многим людям нужна помощь, но они не знают, к кому обратиться. После 37 лет работы в психотерапии доктор Ахмедов решил объединить лучших специалистов страны на одной платформе, чтобы каждый нуждающийся мог найти “своего” психотерапевта, психолога или психиатра
      </p>

      <div class="absolute -bottom-[45px] w-[139px] h-[138px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/nZFWjir21W.png)] bg-[length:100%_100%] bg-no-repeat max-[1400px]:w-[90px] max-[1400px]:h-[90px] max-[1400px]:-bottom-10 max-[1400px]:-left-5"></div>
      <div class="absolute bottom-[112px] right-[262px] h-[68px] w-[68px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/GFRBtbe9aX.png)] bg-[length:100%_100%] bg-no-repeat max-[1400px]:w-[46px] max-[1400px]:h-[46px] max-[1400px]:bottom-5 max-[1400px]:-right-[36px]"></div>
      
    </app-section-fluid>

    <app-section>
      <div class="relative z-[116] mb-0 mr-0 mt-[120px] flex items-center justify-between gap-[60px] max-[1240px]:flex-col max-[1240px]:gap-[30px] max-[1240px]:mt-[80px]">
        <div class="flex-1 max-w-[622px] max-[1240px]:max-w-[unset]">
          <img class="w-full" src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/sX3zNKVm1s.png" alt="img" width="622" height="519">
        </div>

        <div class="relative z-[110] flex-1 flex-col flex-nowrap items-start gap-[60px] max-w-[758px] max-[1240px]:max-w-[unset]">
          <div class="relative z-[111] flex shrink-0 flex-col flex-nowrap items-start gap-[30px] self-stretch max-[1240px]:gap-[15px]">
            <div
              class="relative z-[112] shrink-0 text-left font-['Onest'] font-semibold text-[50px] max-[1240px]:text-[32px]"
            >
              <span
                class="relative text-left font-['Onest']  font-semibold  text-[#63845c]"
              >
                Основатель:
              </span>
              <span
                class="relative text-left font-['Onest']  font-semibold  text-[#323232]"
              >
                Ахмедов Санджар Акбарович
              </span>
            </div>

            <span
              class="relative z-[113] flex max-w-[467px] shrink-0 items-start justify-start text-left font-['Onest'] text-[16px] font-normal text-[#323232] min-[1240px]:text-xl"
            >
              Основатель платформы, врач-психотерапевт, к.м.н. Имеет 37 лет опыта и более 15 000 часов консультирования.
              <br />
              <br />
              Именно его энтузиазм и вера в необходимость доступной психотерапии легли в основу «Душевного Здоровья»
            </span>
          </div>

          <NuxtLink
            href="#"
            class="relative max-w-[223px] z-[114] flex shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[15px] bg-[#63845c] pb-[16px] pl-[20px] pr-[20px] pt-[16px] mt-[60px] max-[1240px]:max-w-[unset]"
          >
            <span
              class="relative z-[115] h-[23px] shrink-0 basis-auto whitespace-nowrap text-left font-['Manrope'] text-[17px] font-bold leading-[23px] text-[#fff]"
            >
              Узнать больше
            </span>
          </NuxtLink>
        </div>
      </div>
    </app-section>

    <app-section class="max-[1420px]:p-0">
      <span
        class="relative z-[118] mb-0 mr-0 mt-[120px] block text-left font-['Onest'] font-semibold text-[#323232] text-[50px] max-[1420px]:px-4 max-[940px]:text-[32px] max-[940px]:mt-[80px]"
      >
        Команда
      </span>
      <!-- <pre>{{ specialists[0] }}</pre> -->

      <div class="relative z-[119] mb-0 mr-0 mt-[30px] gap-[20px] px-4 flex overflow-x-auto max-[940px]:mt-5">
        <div v-for="specialist in specialists" :key="specialist.id"
        class="shrink-0 w-[288px] flex-auto">
          <img class="w-full h-[400px] object-cover rounded-[10px] max-[940px]:h-[435px]" :src="specialist.photo" alt="team-img" width="345" height="400">

          <div class="flex flex-col gap-[5px] mt-5 leading-[1.2]">
              <p class="text-[24px] font-semibold text-black/100 max-[940px]:text-[22px]">
                {{ specialist.full_name }}
              </p>

              <span class="text-[17px] text-black/80 max-[940px]:text-[15px]">
                {{ specialist.specializations[0].name }}
              </span>
          </div>
        </div>
        <!-- <div class="flex-1 max-[1420px]:shrink-0 max-[1420px]:w-[288px] max-[1420px]:flex-auto">
          <img class="w-full h-[400px] object-cover rounded-[10px] max-[940px]:h-[435px]" src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/xehTJLCUuR.png" alt="team-img" width="345" height="400">

          <div class="flex flex-col gap-[5px] mt-5 leading-[1.2]">
              <p class="text-[24px] font-semibold text-black/100 max-[940px]:text-[22px]">
                Ахмедова АзизаТахировна
              </p>

              <span class="text-[17px] text-black/80 max-[940px]:text-[15px]">
                Клинический психолог
              </span>
          </div>
        </div>
        
        <div class="flex-1 max-[1420px]:shrink-0 max-[1420px]:w-[288px] max-[1420px]:flex-auto">
          <img class="w-full h-[400px] rounded-[10px] object-cover max-[940px]:h-[435px]" src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/yi40VegWZ0.png" alt="team-img" width="345" height="400">

          <div class="flex flex-col gap-[5px] mt-5 leading-[1.2]">
              <p class="text-[24px] font-semibold text-black/100 max-[940px]:text-[22px]">
                Исмоилов Жахонгир Абдулазизович
              </p>

              <span class="text-[17px] text-black/80 max-[940px]:text-[15px]">
                Гештальт-терапевт
              </span>
          </div>
        </div>
        
        <div class="flex-1 max-[1420px]:shrink-0 max-[1420px]:w-[288px] max-[1420px]:flex-auto">
          <img class="w-full h-[400px] rounded-[10px] object-cover max-[940px]:h-[435px]" src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ejBci92NKD.png" alt="team-img" width="345" height="400">

          <div class="flex flex-col gap-[5px] mt-5 leading-[1.2]">
              <p class="text-[24px] font-semibold text-black/100 max-[940px]:text-[22px]">
                Курбанова Мунира Махмудовна
              </p>

              <span class="text-[17px] text-black/80 max-[940px]:text-[15px]">
                Врач-психотерапевт
              </span>
          </div>
        </div>

        <div class="flex-1 max-[1420px]:shrink-0 max-[1420px]:w-[288px] max-[1420px]:flex-auto">
          <img class="w-full h-[400px] object-cover rounded-[10px] max-[940px]:h-[435px]" src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/xehTJLCUuR.png" alt="team-img" width="345" height="400">

          <div class="flex flex-col gap-[5px] mt-5 leading-[1.2]">
              <p class="text-[24px] font-semibold text-black/100 max-[940px]:text-[22px]">
                Ахмедова АзизаТахировна
              </p>

              <span class="text-[17px] text-black/80 max-[940px]:text-[15px]">
                Клинический психолог
              </span>
          </div>
        </div> -->
      </div>

      <div
        class="relative z-[144] mb-0 mr-0 mt-[50px] flex flex-col flex-nowrap items-start overflow-hidden py-[46px] px-[30px] justify-center gap-[30px] rounded-[20px] bg-[#fff] max-[1420px]:w-[calc(100%-32px)] max-[1420px]:mx-auto max-[940px]:py-[25px] max-[940px]:px-[15px]"
      >
        <div class="relative z-[145] flex shrink-0 flex-col flex-nowrap items-start gap-[10px]">
          <span
            class="relative z-[146] flex shrink-0 items-start justify-start text-left font-['Onest'] text-[30px] font-medium text-[#323232] max-w-[920px] leading-[1.2] max-[940px]:text-[18px]"
          >
            Всего на платформе сейчас работают 8 специалистов: психотерапевты, клинические психологи, гипнотерапевт...
            Каждый из них — профессионал с опытом от 5 до 30 лет
          </span>
        </div>

        <div
          class="absolute right-[268px] -top-[70px] h-[170px] w-[170px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/hE6aUfd9ua.png)] bg-[length:100%_100%] bg-no-repeat max-[1300px]:w-[69px] max-[1300px]:h-[69px] max-[1300px]:-top-[23px] max-[1300px]:-right-[38px]"
        ></div>

        <div
          class="absolute -right-[44px] -bottom-[55px] h-[139px] w-[139px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/V6pcmuVZDc.png)] bg-cover bg-no-repeat max-[1300px]:w-[63px] max-[1300px]:h-[63px] max-[1300px]:-left-[18px] max-[1300px]:-bottom-[27px]"
        ></div>
      </div>
    </app-section>

    <home-leed-form class="mt-[120px] max-[940px]:mt-[80px]" />

    <app-section-fluid class="bg-[#fff] py-[120px] max-[1200px]:py-10">
      <div class="relative z-[152]">
        <span
          class="relative z-[153] mb-0 mr-0 block text-left font-['Onest'] font-semibold text-[#323232] text-[50px] max-[1200px]:text-[32px]"
        >
          Наши особенности
        </span>

        <div class="relative z-[154] mb-0 mr-0 mt-[40px] grid grid-cols-2 max-[1200px]:mt-5 max-[1200px]:grid-cols-1">
          <div
            class="relative z-[155] flex flex-nowrap items-start gap-[40px] border-r border-b border-solid border-[#e0e5e3] pb-[40px] pl-0 pr-0 pt-[40px] max-[1200px]:px-0 max-[1200px]:py-[15px] max-[1200px]:border-r-0 max-[1200px]:gap-5"
          >
            <div
              class="relative z-[156] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/CpLu7cHM7X.png)] bg-cover bg-no-repeat max-[1200px]:w-[35px] max-[1200px]:h-[35px]"
            ></div>

            <div class="relative z-[157] flex shrink-0 grow basis-0 flex-col flex-nowrap items-start gap-[12px] max-[1200px]:gap-[5px]">
              <span
                class="relative z-[158] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold leading-[1.2] text-[#323232] max-[1200px]:text-[18px]"
              >
                Комплексный подход
              </span>
              <span
                class="relative z-[159] flex shrink-0 items-start justify-start text-left font-['Onest'] text-[18px] font-normal text-[#585958] leading-[1.1] max-[1200px]:text-[14px] max-[1200px]:leading-[1.2]"
              >
                Объединяем психологию и медицину — при необходимости доступно психиатрическое сопровождение под
                наблюдением врача
              </span>
            </div>
          </div>

          <div
            class="relative z-[165] flex flex-nowrap items-start gap-[40px] border-b border-r-[#e0e5e3] pb-[40px] pl-[30px] pt-[40px] max-[1200px]:px-0 max-[1200px]:py-[15px] max-[1200px]:gap-5"
          >
            <div
              class="relative z-[161] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/LMv0Pq46Nw.png)] bg-cover bg-no-repeat max-[1200px]:w-[35px] max-[1200px]:h-[35px]"
            ></div>

            <div class="relative z-[167] flex shrink-0 grow basis-0 flex-col flex-nowrap items-start gap-[12px] max-[1200px]:gap-[5px]">
              <span
                class="relative z-[168] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold leading-[1.2] text-[#323232] max-[1200px]:text-[18px]"
              >
                Проверенные методы
              </span>
              <span
                class="relative z-[169] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[18px] font-normal text-[#585958] leading-[1.1] max-[1200px]:text-[14px] max-[1200px]:leading-[1.2]"
              >
                Используем научно обоснованные, проверенные практики — без эзотерики и модных псевдоподходов
              </span>
            </div>
          </div>

          <div
            class="relative z-[160] flex flex-nowrap items-start gap-[40px] border-r border-solid border-[#e0e5e3] pb-[40px] pr-0 pt-[40px] max-[1200px]:px-0 max-[1200px]:py-[15px] max-[1200px]:border-r-0 max-[1200px]:border-b max-[1200px]:gap-5"
          >
            <div
              class="relative z-[166] h-[45px] w-[45px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/OU6r9kZyeK.png)] bg-cover bg-no-repeat max-[1200px]:w-[35px] max-[1200px]:h-[35px]"
            ></div>

            <div class="relative z-[162] flex shrink-0 grow basis-0 flex-col flex-nowrap items-start gap-[12px] max-[1200px]:gap-[5px]">
              <span
                class="relative z-[163] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold leading-[1.2] text-[#323232] max-[1200px]:text-[18px]"
              >
                Бережность
              </span>

              <span
                class="relative z-[164] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[18px] font-normal text-[#585958] leading-[1.1] max-[1200px]:text-[14px] max-[1200px]:leading-[1.2]"
              >
                Главное для нас — тёплое, уважительное отношение и безопасное пространство, где можно быть собой
              </span>
            </div>
          </div>

          <div
            class="relative z-[170] flex flex-nowrap items-start gap-[40px] pb-[40px] pl-[30px] pr-0 pt-[40px] max-[1200px]:px-0 max-[1200px]:py-[15px] max-[1200px]:pb-0 max-[1200px]:gap-5"
          >
            <div class="relative z-[171] shrink-0 overflow-hidden">
              <div
                class="relative z-[172] mb-0 mr-0 h-[45px] w-[45px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/ojQctYFenW.png)] bg-[length:100%_100%] bg-no-repeat max-[1200px]:w-[30px] max-[1200px]:h-[30px]"
              ></div>
            </div>

            <div class="relative z-[173] flex shrink-0 grow basis-0 flex-col flex-nowrap items-start gap-[12px] max-[1200px]:gap-[5px]">
              <span
                class="relative z-[174] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[24px] font-semibold leading-[1.2] text-[#323232] max-[1200px]:text-[18px]"
              >
                От диагностики до восстановления
              </span>
              <span
                class="relative z-[175] flex shrink-0 items-start justify-start self-stretch text-left font-['Onest'] text-[18px] font-normal text-[#585958] leading-[1.1] max-[1200px]:text-[14px] max-[1200px]:leading-[1.2]"
              >
                Сопровождаем клиента на всех этапах: выявление запроса, работа с причинами, поддержка после терапии
              </span>
            </div>
          </div>
        </div>
      </div>
    </app-section-fluid>
  </div>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
import HomeLeedForm from "~/features/home/ui/home-leed-form.vue"
import AppSectionFluid from "~/widgets/layout/app-section-fluid.vue"
import AppSection from "~/widgets/layout/app-section.vue"
const { $http } = useNuxtApp()
const specialists = ref([])
const getdata = async () => {
  return $http.$get("/specialists", { params: { page: 1, limit: 10 } })
}

const { data, refresh } = await useAsyncData("specialists", () => getdata())

specialists.value = data.value?.data || []

</script>
