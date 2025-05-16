console.log("test");

const t1 = document.getElementById("t1"),
  t2 = document.getElementById("t2");

const s1 = document.getElementById("s1"),
  s2 = document.getElementById("s2"),
  s3 = document.getElementById("s3");

const place = document.getElementById("place");

const content = {
  t1: `<h1 class="mt-4 text-2xl lg:text-3xl">Talent: Mon3tr</h1>
  
  <p class="mt-2 text-base lg:text-lg bg-[#242424] z-2 px-4 py-2 rounded-lg max-w-[45em]">Can use and heal <span class="text-sky-400">Mon3tr</span>, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>
  
  <h1 class="mt-4 text-2xl lg:text-3xl">Summon: Mon3tr</h1>

  <span class="text-lg lg:text-xl mt-2 block">Icon</span>

  <div class="flex flex-col lg:flex-row w-full min-h-fit gap-2">
    <div class="flex flex-col max-w-[20rem] w-full lg:w-[20%]">
      <div class="flex flex-row max-w-[20rem] w-full gap-2 z-1">
        <img src="https://arknights.wiki.gg/images/3/33/Mon3tr_summon.png?f722c5" alt="Mon3tr" class="aspect-square w-[30%] lg:w-[50%] p-2 max-w-[8em] border-[0.5px] border-white rounded-lg" />
        <img src="https://arknights.wiki.gg/images/b/b9/Mon3tr_summon_Skin_1.png?860947" alt="Mon3tr Remnant" class="aspect-square w-[30%] lg:w-[50%] max-w-[8em] border-[0.5px] border-white rounded-lg" />
      </div>
      <h1 class="mt-5">Range</h1>
      <div class="flex h-[200%] max-h-[12em] w-full lg:justify-center items-center">
        <div class="grid grid-cols-2 aspect-[2/1] gap-1 w-1/4 mt-3">
          <span class="aspect-square p-[0.125em] block border-[#27a6f3] bg-[#27a6f3] border-[2px]"></span>
          <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
        </div>
      </div>
    </div>

    <div class="w-full min-h-full flex flex-col gap-2">
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[86%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >HP : 5433</span
      >
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[74%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >Atk : 1402</span
      >
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[38%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >Def : 405
      </span>
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[0%] before:min-h-full before:py-0.5 before:px-0.5 text-white font-mono"
        >Res : 0
      </span>
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[40%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >Redeploy : 25s
      </span>
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[20%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >DP Cost : 10
      </span>
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[75%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >Block : 3
      </span>
      <span
        class="block bg-linear-to-r from-white/13 via-white/13 to-white/0 to-80% relative overflow-hidden rounded-sm px-4 before:content-[''] before:rounded-r-sm before:-ml-4 before:bg-white/10 before:absolute before:w-[38%] before:min-h-full before:py-0.5 before:px-2 text-white font-mono"
        >Attack Interval : 2s
      </span>
    </div>
  </div>

  <div class="absolute -top-5 -right-8 2xl:-right-4 aspect-[16/7.4] 2xl:aspect-[12/7.5] overflow-hidden min-h-[106%] bg-slate-500 flex justify-end items-start select-none -z-[6]">
    <div class="w-full min-h-full bg-linear-to-r from-[#545557]/100 from-60% lg:form-40% via-[#545557]/98 lg:via-[#545557]/80 via-95% lg:via-80% to-[#545557]/0 absolute -left-[19em] -z-[1]"></div>
    <img src="./src/img/mon3tr.png" alt="mon3tr-art" class="opacity-70 aspect-square object-cover max-w-[89em] min-h-full sm:min-h-fit sm:max-w-[51em] relative xl:-mr-14 -z-[2]" />
  </div>`,

  t2: `<h1 class="mt-4 text-2xl lg:text-3xl">Talent: Non-Damaging Restructuring</h1>
  
  <p class="mt-2 text-base lg:text-lg bg-[#242424] px-4 py-2 rounded-lg max-w-[45em]">When Mon3tr is defeated (excluding retreat), all enemies in the surrounding 8 tiles are Stunned for 3.5 <span class="text-sky-400">(+0.5)</span> seconds and receive 1400 <span class="text-sky-400">(+200)</span> True damage</p>
  
  <h1 class="mt-5">Range</h1>
  <div class="flex w-full aspect-square max-w-[10em] lg:justify-center items-center -mt-2">
    <div class="grid grid-cols-3 aspect-[2/1] gap-1 w-2/4 mt-3">
      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>

      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
      <span class="aspect-square p-[0.125em] block border-[#27a6f3] bg-[#27a6f3] border-[2px]"></span>
      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>

      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
      <span class="aspect-square p-[0.125em] block border-gray-400 border-[2px]"></span>
    </div>
  </div>

  <div class="absolute -top-5 -right-8 2xl:-right-4 aspect-[16/7.4] 2xl:aspect-[12/7.5] overflow-hidden min-h-[106%] bg-slate-500 flex justify-end items-start select-none -z-[6]">
    <div class="w-full min-h-full bg-linear-to-r from-[#545557]/100 from-60% lg:form-40% via-[#545557]/98 lg:via-[#545557]/80 via-95% lg:via-80% to-[#545557]/0 absolute -left-[19em] -z-[1]"></div>
    <img src="./src/img/mon3tr.png" alt="mon3tr-art" class="opacity-70 aspect-square object-cover max-w-[51em] relative xl:-mr-14 -z-[2]" />
  </div>`,

  s1: `<h1 class="mt-4 text-2xl lg:text-3xl w-full">Skill: Command: Structural Fortification </h1>

  <img src="https://arknights.wiki.gg/images/thumb/0/05/Rank_10.png/30px-Rank_10.png?5a915c" alt="m3" />

  <div class="flex flex-col lg:flex-row gap-2 w-full mt-4">
    <div class="lg:w-[7.6%] min-h-full">
        <img
            src="https://arknights.wiki.gg/images/thumb/0/03/Skill-Kal%27tsit1.png/64px-Skill-Kal%27tsit1.png?d691d0s"
            alt="skill-one-click"
            class="w-full max-w-[5em] lg:max-w-[8em] aspect-square bg-slate-600"
        />
    </div>
    <div class="w-full lg:w-[92.4%] mt-3 lg:mt-0">
        <div class="bg-[#242424] px-4 py-2 text-base lg:text-lg flex flex-col rounded-lg gap-1">
            <span class="px-2 py-1 rounded-lg bg-lime-600 inline w-fit">Auto Recovery</span>
            <span  class="px-2 py-1 rounded-lg bg-gray-400 inline w-fit">Manual</span>
            <span>SP: 10 Initial/20 Sp, 40s duration</span>
        </div>

        <p class="mt-5 text-lg lg:text-xl bg-[#242424] px-4 py-2 rounded-lg">
        This unit and Mon3tr gains <span class="text-sky-400">+150%</span> DEF. This unit also gains <span class="text-sky-400">50%</span> Physical resist
        </p>
    </div>
  </div>`,

  s2: `<h1 class="mt-4 text-2xl lg:text-3xl w-full">Skill: Command: Tactical Coordination </h1>
  <div class="flex flex-col lg:flex-row gap-2 w-full mt-4">
    <div class="lg:w-[7.6%] min-h-full">
        <img
            src="https://arknights.wiki.gg/images/thumb/4/49/Skill-Kal%27tsit2.png/64px-Skill-Kal%27tsit2.png?4a12ba"
            alt="skill-two-click"
            class="w-full max-w-[5em] lg:max-w-[8em] aspect-square bg-slate-600"
        />
    </div>
    <div class="w-full lg:w-[92.4%] mt-3 lg:mt-0">
        <div class="bg-[#242424] px-4 py-2 text-base lg:text-lg flex flex-col rounded-lg gap-1">
            <span class="px-2 py-1 rounded-lg bg-lime-600 inline w-fit">Auto Recovery</span>
            <span class="px-2 py-1 rounded-lg bg-gray-400 inline w-fit">Manual</span>
            <span>SP: 0 Initial/8 SP, 20s duration</span>
        </div>

        <p class="mt-5 text-lg lg:text-xl bg-[#242424] px-4 py-2 rounded-lg">
        This unit gains <span class="text-sky-400">+100</span> ASPD; Mon3tr gains ATK <span class="text-sky-400">+90%</span> and attacks all blocked enemies
        This skill is <span class="text-amber-400">Tied</span> to Mon3tr
        </p>
    </div>
  </div>`,

  s3: `<h1 class="mt-4 text-2xl lg:text-3xl w-full">Skill: Command: Meltdown </h1>
  <div class="flex flex-col lg:flex-row gap-2 w-full mt-4">
    <div class="lg:w-[7.6%] min-h-full">
        <img
            src="https://arknights.wiki.gg/images/thumb/c/c1/Skill-Kal%27tsit3.png/64px-Skill-Kal%27tsit3.png?4c8aa9"
            alt="skill-three-click"
            class="w-full max-w-[5em] lg:max-w-[8em] aspect-square bg-slate-600"
        />
    </div>
    <div class="w-full lg:w-[92.4%] mt-3 lg:mt-0">
        <div class="bg-[#242424] px-4 py-2 text-base lg:text-lg flex flex-col rounded-lg gap-1">
            <span class="px-2 py-1 rounded-lg bg-lime-600 inline w-fit">Auto Recovery</span>
            <span class="px-2 py-1 rounded-lg bg-gray-400 inline w-fit">Manual</span>
            <span>SP: 0 Initial/15 SP, 20s duration</span>
        </div>

        <p class="mt-5 text-lg lg:text-xl bg-[#242424] px-4 py-2 rounded-lg">
        Mon3tr gains DEF <span class="text-sky-400">+200%</span>, ATK <span class="text-sky-400">+260%</span> that gradually decays to +0% over the skill duration and deals <span class="text-sky-400">True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span class="text-sky-400">50%</span> of Max HP. This skill is <span class="text-amber-400">Tied</span> to Mon3tr
        </p>
    </div>
  </div>`,
};

// initial reload
place.innerHTML = content.t1;

t1.addEventListener("click", () => {
  place.innerHTML = content.t1;
});
t2.addEventListener("click", () => {
  place.innerHTML = content.t2;
});

s1.addEventListener("click", () => {
  console.log("test");
  place.innerHTML = content.s1;
});
s2.addEventListener("click", () => {
  place.innerHTML = content.s2;
});
s3.addEventListener("click", () => {
  place.innerHTML = content.s3;
});
