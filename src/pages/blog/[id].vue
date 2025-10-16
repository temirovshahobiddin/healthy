<template>
  <div class="main-container relative mx-auto my-0 overflow-hidden bg-[#f0f4f1]">
    <div v-if="blog">
      <app-section>
        <div class="relative z-[77] mx-auto mt-[30px] md:mt-[60px] flex w-full max-w-[954px] flex-col flex-nowrap items-start gap-[30px] md:gap-[50px] rounded-[20px] bg-[#fff] pb-[20px] md:pb-[30px] px-[20px] md:px-[40px] pt-[20px] md:pt-[30px]">
          <div class="relative z-[78] flex w-full flex-col flex-nowrap items-start gap-[20px] md:gap-[30px]">
            <div class="relative z-[79] flex flex-col flex-nowrap items-start gap-[8px] md:gap-[12px] self-stretch">
              <span
                class="relative z-[80] flex items-start justify-start self-stretch text-left font-['Onest'] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-bold leading-tight text-[#323232]">
                {{ blog.data.title }}
              </span>
              <div class="relative z-[81] flex flex-nowrap items-center justify-center gap-[10px] self-stretch">
                <span
                  class="relative z-[82] flex items-start justify-start text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#585958]">
                  {{ blog.data.short_description }}
                </span>
              </div>
            </div>
            <div class="relative z-[83] flex flex-col flex-nowrap items-start gap-[15px] md:gap-[20px] self-stretch">
              <div class="relative z-[84] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] shrink-0 self-stretch rounded-[10px] bg-[rgba(217,217,217,0.2)] bg-cover bg-no-repeat"
                  :style="{ backgroundImage: `url(${blog?.data.thumbnail})` }">
              </div>
              <div class="relative z-[85] flex flex-wrap items-center justify-between self-stretch gap-[10px]">
                <div
                  class="relative z-[86] whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal">
                  <span
                    class="relative text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#63845c]">Автор:</span>
                  <span
                    class="relative text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#63845c] underline">
                    {{ blog.data.author.full_name }}
                  </span>
                </div>
                <span
                  class="relative z-[87] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#848484]">
                  {{ formatDate(blog.data.created_at, "DD.MM.YYYY") }}
                </span>
              </div>
            </div>
          </div>
          <div class="relative z-[88] flex w-full flex-col flex-nowrap items-start gap-[30px] md:gap-[50px]">
            <div class="relative z-[89] flex flex-col flex-nowrap items-start gap-[12px] md:gap-[15px] self-stretch">
              <div v-html="blog.data.content"></div>
            </div>
            <!-- <div class="relative z-[89] flex flex-col flex-nowrap items-start gap-[12px] md:gap-[15px] self-stretch">
              <span
                class="relative z-[90] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold text-[#323232]">
                Что это такое?
              </span>
              <span
                class="relative z-[91] flex items-start justify-start self-stretch text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#323232]">
                Паническая атака (ПА) — внезапный приступ сильной тревоги, сопровождаемый мучительными телесными и
                психическими ощущениями (сердцебиение, удушье, головокружение, диарея, тошнота, тревога, страх, мысли о
                смерти и сумасшествии).
                <br />
                <br />
                Панические атаки не смертельны и не могут привести к опасным для жизни заболеваниям
              </span>
            </div>
            <div class="relative z-[92] flex flex-col flex-nowrap items-start gap-[12px] md:gap-[15px] self-stretch">
              <span
                class="relative z-[93] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold text-[#323232]">
                Причины появления
              </span>
              <span
                class="relative z-[94] flex items-start justify-start self-stretch text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#323232]">
                ПА являются основным проявлением панического расстройства, однако паническое расстройство имеет место не
                у
                всех пациентов, страдающих паническими атаками. Для панического расстройства характерны:
                <br />
                - частые панические атаки, не вызванные какими-либо внешними причинами;
                <br />
                - пациент переживает страх не только во время приступов, но и при мысли о приступе, он постоянен;
                <br />
                - для панического расстройства характерно стремление пациента избегать всего, что может вызвать атаку.
                <br />
                <br />
                ПА могут возникать при разных других расстройствах и состояниях:
                <br />
                - посттравматическом стрессовом расстройстве;
                <br />
                - депрессиях;
                <br />
                - психосоматических и ипохондрических расстройствах;
                <br />
                - обсессивно-компульсивном расстройстве;
                <br />
                - истерических неврозах;
                <br />
                - неврастениях;
                <br />
                - расстройствах личности;
              </span>
            </div>
            <div class="relative z-[95] flex flex-col flex-nowrap items-start gap-[15px] md:gap-[20px] self-stretch">
              <span
                class="relative z-[96] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold text-[#323232]">
                Симптомы панической атаки
              </span>
              <div
                class="relative z-[97] h-[250px] border-[1px] border-solid border-[#e7e7e7] sm:h-[350px] md:h-[450px] shrink-0 self-stretch rounded-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/hLL8vYM0bh.png)] bg-cover bg-no-repeat">
              </div>
              <span
                class="relative z-[98] flex items-start justify-start self-stretch text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#323232]">
                Паническая атака характеризуется быстрым нарастанием страха и, чаще, кратковременностью. Обычно это
                состояние сопровождается страхами, например, смерти, потерять контроль над собой или сойти с ума. Также
                пациенты, страдающие паническими атаками, часто воспринимают симптомы панической атаки как проявление
                опасных заболеваний, например, инфаркта, инсульта и других.
                <br />
                <br />
                Приступы паники не ограничиваются какой-либо определённой ситуацией и характеризуются быстрым
                нарастанием.
                ПА могут возникать как на фоне уже существующей тревожности, так и в спокойном состоянии
              </span>
            </div>
            <div class="relative z-[99] flex flex-col flex-nowrap items-start gap-[12px] md:gap-[15px] self-stretch">
              <span
                class="relative z-[100] shrink-0 basis-auto self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold text-[#323232]">
                Лечение
              </span>
              <span
                class="relative z-[101] flex items-start justify-start self-stretch text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#323232]">
                В лечении ПА применяют психотерапию и психофармакологические методы.
                <br />
                Из психотерапевтических методов используют чаще КПТ, где когнитивная терапия направлена на коррекцию
                негативных убеждений пациента по поводу опасности симптомов ПА, а поведенческая часть - на обучение
                техникам контроля. Применяется также и систематическая десенсибилизация - намеренное вызывание у
                пациента
                паники, что способствует постепенному привыканию и исчезновению ПА.
                <br />
                <br />
                Психодинамическая психотерапия направлена на выявление психических травм, механизмов тревоги и их
                проработку.
                <br />
                <br />
                Из других методов в психотерапии применяют суггестивную терапию (медицинский и эриксоновский гипноз).
                <br />
                <br />
                Психофармакологическое лечение обычно ограничивается назначением антидепрессантов - селективных
                ингибиторов обратного захвата серотонина и бензодиазепинов. В более тяжёлых случаях могут быть добавлены
                атипичные нейролептики.
                <br />
                <br />
                Когнитивно-поведенческая психотерапия излечивает ПА приблизительно у 70 % пациентов. Лекарства
                назначаются
                в следующих случаях:
                <br />
                - психотерапия была проведена, но не дала результата;
                <br />
                - наличие проблем, не позволяющих пациенту сосредоточиться на психотерапии;
                <br />
                - нет желания воспользоваться психотерапией
              </span>
            </div>
            <div
              class="relative z-[102] flex flex-nowrap items-center gap-[10px] self-stretch overflow-hidden rounded-[10px] bg-[#f0f4f1] p-[15px] md:p-[20px]">
              <span
                class="relative z-[103] flex items-start justify-start grow text-left font-['Onest'] text-[18px] md:text-[24px] font-semibold leading-snug text-[#63845c]">
                Паническая атака не опасна для жизни – помните об этом, и страх несколько утихнет
              </span>
            </div> -->
          </div>
        </div>
      </app-section>
      <app-section>
        <div
          class="relative z-[104] mx-auto mt-[20px] flex w-full max-w-[954px] flex-col md:flex-row flex-nowrap items-center gap-[20px] md:gap-[40px] rounded-[20px] bg-[#fff] p-[20px] md:pb-[30px] md:pt-[30px]">
          <div 
          class="relative z-[105] h-[200px] md:h-[285px] w-full md:w-[271px] shrink-0 overflow-hidden rounded-[10px] bg-cover bg-no-repeat"
            :style="{
              backgroundImage: `url(${blog?.data.specialist?.photo || 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/WTkDXYkXky.png'})`
            }">
          </div>
          <div
            class="relative z-[106] flex w-full md:shrink-0 md:grow md:basis-0 flex-col flex-nowrap items-start gap-[20px] md:gap-[40px]">
            <div class="relative z-[107] flex flex-col flex-nowrap items-start gap-[15px] md:gap-[20px] self-stretch">
              <span
                class="relative z-[108] shrink-0 basis-auto text-left font-['Onest'] text-[16px] md:text-[18px] font-semibold text-[#63845c]">
                Автор статьи
              </span>
              <div class="relative z-[109] flex flex-col flex-nowrap items-start gap-[10px] self-stretch">
                <div class="relative z-[110] flex flex-nowrap items-center justify-center gap-[10px] self-stretch">
                  <span
                    class="relative z-[111] flex items-start justify-start grow text-left font-['Onest'] text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-tight text-[#323232]">
                    {{ blog.data.author.full_name }}
                  </span>
                </div>
                <div class="relative z-[112] flex flex-nowrap items-center justify-center gap-[10px] self-stretch">
                  <span
                    class="relative z-[113] flex items-start justify-start grow text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#585958]">
                    {{ blog.data.author.description || "Практикующий психотерапевт. Опыт работы 37 лет. Автор 158+ статей" }}
                  </span>
                </div>
              </div>
            </div>
            <div
              class="relative z-[114] flex h-[50px] w-full md:w-[201px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[15px] bg-[#63845c] pb-[15px] pl-[15px] pr-[15px] pt-[15px]">
              <span
                class="relative z-[115] shrink-0 basis-auto whitespace-nowrap cursor-pointer text-left font-['Manrope'] text-[16px] font-bold leading-[21.856px] text-[#fff]"
                @click="router.push(`/specialisty/${blog.data.author?.slug || 'sandzar-axmedov-3'}`)">
                Посмотреть профиль
              </span>
            </div>
          </div>
        </div>
      </app-section>
      <app-section>
        <div
          class="relative z-[116] mx-auto mt-[20px] flex w-full max-w-[954px] flex-col flex-nowrap items-start gap-[20px] md:gap-[30px] overflow-hidden rounded-[20px] bg-[#fff] pb-[20px] md:pb-[30px] px-[20px] md:px-[30px] pt-[20px] md:pt-[30px]">
          <div class="relative z-[117] flex flex-col flex-nowrap items-start gap-[10px] self-stretch">
            <span
              class="relative z-[118] flex items-start justify-start text-left font-['Onest'] text-[24px] md:text-[30px] font-semibold leading-tight text-[#323232]">
              Поделитесь статьей с теми, кому это может быть важно
            </span>
            <span
              class="relative z-[119] flex items-start justify-start text-left font-['Onest'] text-[16px] md:text-[18px] font-normal leading-relaxed text-[#585958]">
              Один клик — и полезная информация дойдёт до нужного человека
            </span>
          </div>
          <div class="relative z-[120] flex flex-wrap items-center gap-[15px]">
            <div
              class="relative z-[121] flex h-[38px] w-[38px] shrink-0 flex-nowrap items-center justify-center gap-[10px] rounded-[22.5px] bg-[#63845c] pb-[10px] pl-[10px] pr-[10px] pt-[10px]">
              <div
                class="relative z-[122] h-[29px] w-[29px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/m2beTU4hon.png)] bg-cover bg-no-repeat">
              </div>

            </div>
            <a target="_blank" :href="siteSettings?.telegram">
              <div
                class="relative z-[123] h-[38px] w-[38px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/iBJHrYwWh2.png)] bg-cover bg-no-repeat">
              </div>
            </a>
            <a target="_blank" :href="siteSettings?.facebook">
              <div
                class="relative z-[124] h-[38px] w-[38px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/JVvwj8k8NC.png)] bg-cover bg-no-repeat">
              </div>
            </a>
            <a target="_blank" :href="siteSettings?.instagram">
              <div
                class="relative z-[125] h-[38px] w-[38px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/BkFGseac4F.png)] bg-cover bg-no-repeat">
              </div>
            </a>
            <!-- <a
            class="relative z-[122] h-[29px] w-[29px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/yPJLFS0Mrn.png)] bg-cover bg-no-repeat"
            target="_blank"
            :href="siteSettings?.telegram"
          ></a>
          <a
            class="relative z-[122] h-[29px] w-[29px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/M0xHPN9iJa.png)] bg-cover bg-no-repeat"
            target="_blank"
            :href="siteSettings?.facebook"
          ></a>
          <a
            class="relative z-[122] h-[29px] w-[29px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-20/ij44xJ0f0Q.png)] bg-cover bg-no-repeat"
            target="_blank"
            :href="siteSettings?.instagram"
          ></a> -->
            <!-- <div class="relative flex items-center gap-[20px] md:w-[160px]">
      </div> -->
          </div>
          <div
            class="hidden md:block absolute right-0 top-0 z-[126] h-[263px] w-[345px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/7XQhWzDSyX.png)] bg-cover bg-no-repeat">
          </div>
        </div>
      </app-section>
      <app-section class="py-[60px] md:py-[120px]">
        <span
          class="relative z-[76] mb-0 mr-0 block px-[20px] md:px-0 text-left font-['Onest'] text-[32px] md:text-[48px] lg:text-[52px] font-semibold text-[#323232]">
          Читайте так же
        </span>
        <div class="relative z-[48] mb-0 mr-0 mt-[20px] md:mt-[30px] w-full overflow-x-auto px-[20px] md:px-0">
          <div class="flex flex-nowrap items-start gap-[15px] md:gap-[19px] min-w-min md:min-w-0">
            <div
              class="relative z-[49] flex w-[280px] sm:w-[340px] md:w-[467px] shrink-0 flex-col flex-nowrap items-start gap-[20px] md:gap-[25px] rounded-[20px] bg-[#f7f7f7] pb-[20px] pl-[15px] pr-[15px] pt-[15px]">
              <div
                class="relative z-50 h-[180px] sm:h-[200px] md:h-[240px] shrink-0 self-stretch rounded-[10px] bg-[rgba(217,217,217,0.2)] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/QpB3e9R53o.png)] bg-cover bg-no-repeat">
              </div>
              <div
                class="relative z-[51] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] md:gap-[20px] self-stretch pb-0 pl-[5px] pr-[5px] pt-0">
                <div
                  class="relative z-[52] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch border-t border-solid border-t-[#e0e5e3] pb-[15px] md:pb-[20px] pl-0 pr-0 pt-0">
                  <span
                    class="relative z-[53] flex items-start justify-start self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold leading-tight text-[#323232]">
                    5 способов справиться с панической атакой
                  </span>
                  <span
                    class="relative z-[54] flex items-start justify-start self-stretch text-left font-['Onest'] text-[15px] md:text-[17px] font-normal leading-relaxed text-[#323232]">
                    Практические советы, как действовать при приступе тревоги
                  </span>
                </div>
                <div class="relative z-[55] flex flex-wrap items-center justify-between self-stretch gap-[10px]">
                  <div
                    class="relative z-[56] whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal">
                    <span
                      class="relative text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#63845c] underline">
                      Ахмедов С. А.
                    </span>
                  </div>
                  <span
                    class="relative z-[57] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#848484]">
                    27.06.2025
                  </span>
                </div>
              </div>
            </div>
            <div
              class="relative z-[58] flex w-[280px] sm:w-[340px] md:w-[467px] shrink-0 flex-col flex-nowrap items-start gap-[20px] md:gap-[25px] rounded-[20px] bg-[#f7f7f7] pb-[20px] pl-[15px] pr-[15px] pt-[15px]">
              <div
                class="relative z-[59] h-[180px] sm:h-[200px] md:h-[240px] shrink-0 self-stretch rounded-[10px] bg-[rgba(217,217,217,0.2)] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/Y0TqkpEoXS.png)] bg-cover bg-no-repeat">
              </div>
              <div
                class="relative z-[60] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] md:gap-[20px] self-stretch pb-0 pl-[5px] pr-[5px] pt-0">
                <div
                  class="relative z-[61] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch border-t border-solid border-t-[#e0e5e3] pb-[15px] md:pb-[20px] pl-0 pr-0 pt-0">
                  <span
                    class="relative z-[62] flex items-start justify-start self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold leading-tight text-[#323232]">
                    Как понять, что вам нужен психолог?
                  </span>
                  <span
                    class="relative z-[63] flex items-start justify-start self-stretch text-left font-['Onest'] text-[15px] md:text-[17px] font-normal leading-relaxed text-[#323232]">
                    Признаки, что пора обратиться за помощью
                  </span>
                </div>
                <div class="relative z-[64] flex flex-wrap items-center justify-between self-stretch gap-[10px]">
                  <div
                    class="relative z-[65] whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal">
                    <span
                      class="relative text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#63845c] underline">
                      Ахмедов С. А.
                    </span>
                  </div>
                  <span
                    class="relative z-[66] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#848484]">
                    27.06.2025
                  </span>
                </div>
              </div>
            </div>
            <div
              class="relative z-[67] flex w-[280px] sm:w-[340px] md:w-[467px] shrink-0 flex-col flex-nowrap items-start gap-[20px] md:gap-[25px] rounded-[20px] bg-[#f7f7f7] pb-[20px] pl-[15px] pr-[15px] pt-[15px]">
              <div
                class="relative z-[68] h-[180px] sm:h-[200px] md:h-[240px] shrink-0 self-stretch rounded-[10px] bg-[rgba(217,217,217,0.2)] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-21/N5VHbsS1ba.png)] bg-cover bg-no-repeat">
              </div>
              <div
                class="relative z-[69] flex shrink-0 flex-col flex-nowrap items-start gap-[15px] md:gap-[20px] self-stretch pb-0 pl-[5px] pr-[5px] pt-0">
                <div
                  class="relative z-[70] flex shrink-0 flex-col flex-nowrap items-start gap-[8px] self-stretch border-t border-solid border-t-[#e0e5e3] pb-[15px] md:pb-[20px] pl-0 pr-0 pt-0">
                  <span
                    class="relative z-[71] flex items-start justify-start self-stretch text-left font-['Onest'] text-[20px] md:text-[24px] font-semibold leading-tight text-[#323232]">
                    История: мой путь к психическому здоровью
                  </span>
                  <span
                    class="relative z-[72] flex items-start justify-start self-stretch text-left font-['Onest'] text-[15px] md:text-[17px] font-normal leading-relaxed text-[#323232]">
                    Вдохновляющий кейс от специалиста. Как он боролся со своими проблемами
                  </span>
                </div>
                <div class="relative z-[73] flex flex-wrap items-center justify-between self-stretch gap-[10px]">
                  <div
                    class="relative z-[74] whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal">
                    <span
                      class="relative text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#63845c] underline">
                      Ахмедов С. А.
                    </span>
                  </div>
                  <span
                    class="relative z-[75] shrink-0 basis-auto whitespace-nowrap text-left font-['Onest'] text-[15px] md:text-[17px] font-normal text-[#848484]">
                    27.06.2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppSection from "~/widgets/layout/app-section.vue"
import { useBlogApi } from "~/entities/blog/blog.api"
import { useSiteSettingsStore } from "~/entities/site-settings/site-settings.store"
interface Blog {
  success: boolean
  data: {
    title: string
    short_description: string
    content: string,
    slug: string,
    thumbnail: string,
    created_at: string,
    author: {
      id: number,
      full_name: string,
      first_name: string,
      last_name: string,
      middle_name: string
    }
  }
}

const blogApi = useBlogApi()
const route = useRoute()
const router = useRouter()

const { data, error } = await useAsyncData('blog-detail', async () => {
  return blogApi.getBlogById(route.params.id as string)
})

const siteSettingsStore = useSiteSettingsStore()
const { siteSettings } = storeToRefs(siteSettingsStore)

if (error.value) {
  showError(error.value)
}

const blog = computed(() => data.value)
</script>