console.log("test");

const t1 = document.getElementById("t1"),
  t2 = document.getElementById("t2");

const s1 = document.getElementById("s1"),
  s2 = document.getElementById("s2"),
  s3 = document.getElementById("s3");

const place = document.getElementById("place");

const content = {
  t1: `<h1 class="mt-4 text-2xl lg:text-3xl">Talent: Mon3tr</h1>
  
  <p class="mt-2 text-base lg:text-lg bg-[#242424] px-4 py-2 rounded-lg">Can use and heal Mon3tr, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>`,

  t2: `<h1 class="mt-4 text-2xl lg:text-3xl">Talent: Non-Damaging Restructuring</h1>
  
  <p class="mt-2 text-base lg:text-lg bg-[#242424] px-4 py-2 rounded-lg">When Mon3tr is defeated (excluding retreat), all enemies in the surrounding 8 tiles are Stunned for 3.5 (+0.5) seconds and receive 1400 (+200) True damage</p>`,

  s1: `<h1 class="mt-4 text-2xl lg:text-3xl w-full">Skill: Command: Structural Fortification </h1>
  <div class="flex flex-col lg:flex-row gap-2 w-full mt-4">
    <div class="lg:w-[7.6%] min-h-full">
        <img
            src="https://arknights.wiki.gg/images/thumb/0/03/Skill-Kal%27tsit1.png/64px-Skill-Kal%27tsit1.png?d691d0s"
            alt="skill-one-click"
            class="w-full max-w-[5em] lg:max-w-[8em] aspect-square bg-slate-600"
        />
    </div>
    <div class="w-full lg:w-[92.4%] mt-3 lg:mt-0">
        <div class="bg-[#242424] px-4 py-2 text-base lg:text-lg flex flex-col rounded-lg">
            <span>Auto Recovery</span>
            <span>Manual</span>
            <span>SP: 10 Initial/20 Sp, 40s duration</span>
        </div>

        <p class="mt-5 text-lg lg:text-xl bg-[#242424] px-4 py-2 rounded-lg">
        This unit and Mon3tr gains +150% DEF. This unit also gains 50% Physical resist
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
        <div class="bg-[#242424] px-4 py-2 text-base lg:text-lg flex flex-col rounded-lg">
            <span>Auto Recovery</span>
            <span>Manual</span>
            <span>SP: 0 Initial/8 SP, 20s duration</span>
        </div>

        <p class="mt-5 text-lg lg:text-xl bg-[#242424] px-4 py-2 rounded-lg">
        This unit gains +100 ASPD; Mon3tr gains ATK +90% and attacks all blocked enemies
        This skill is Tied to Mon3tr
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
        <div class="bg-[#242424] px-4 py-2 text-base lg:text-lg flex flex-col rounded-lg">
            <span>Auto Recovery</span>
            <span>Manual</span>
            <span>SP: 0 Initial/15 SP, 20s duration</span>
        </div>

        <p class="mt-5 text-lg lg:text-xl bg-[#242424] px-4 py-2 rounded-lg">
        Mon3tr gains DEF +200%, ATK +260% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% of Max HP. This skill is Tied to Mon3tr
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
  place.innerHTML = content.s1;
});
s2.addEventListener("click", () => {
  place.innerHTML = content.s2;
});
s3.addEventListener("click", () => {
  place.innerHTML = content.s3;
});
