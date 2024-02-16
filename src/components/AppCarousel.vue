<template>
    <div class="app-carousel">
      <div class="logo-container">
        <img class="image-logo" src="https://res.cloudinary.com/fsquaredmedia/image/upload/v1706906101/murphy_1.png"/>
      </div>
      <div v-for="(image, index) in images" :key="index" :class="{ active: currentImage === index }" class="image-container">
        <img :src="image.src" :alt="image.text">
        <div class="overlay">
          <span class="overlay--text">
            {{ image.text }}
          </span>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      currentImage: 0,
      images: [
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/ralphwegis-featured-1.jpg',
          text: 'True Justice In The American West – Doug Williamson’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/bcoonlaw-spanair-featured.jpg',
          text: 'Justice In America – The Spanair Flight #5022 Crash'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/banner-final-v2.jpg',
          text: 'Dr Stephen P Courtney - The Surgeon Who Fought for Justice and Won'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/clarkfountain-featured.jpg',
          text: 'Justice In America – Ryan Paul Batchelder’s  Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/rios-featured.jpg',
          text: 'Justice in America - Alexander Rios’s  Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/bcoonlaw-asbestos-featured-1.jpg',
          text: 'Asbestos - The Stunning Truth that Kills Millions'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/bbdglaw-hadcock-featured.jpg',
          text: 'Predatory Guardianships In America’s Courtrooms – Doris Hadcock’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/bcoonlaw-travisscott-featured.jpg',
          text: 'Travis Scott &amp; The Astroworld Music Festival Tragedy'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/lawjt-maurice-featured.jpg',
          text: 'Justice In America – Maurice Roye’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/Kitlinski-featured.jpg',
          text: 'The DEA - Darek and Lisa Kitlinski’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/murphy-robbery-featured.jpg',
          text: 'Justice in America - Legendary Trial Attorney William "Billy" Murphy, Jr.'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/reidcollins-featured.jpg',
          text: 'Justice In America – The Credit Suisse Fraud Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/addisondardenlaw-featured-1.jpg',
          text: 'Justice in America - The U.S. Marine Corps - Camp Lejeune Justice Act of 2022'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/reidcollins-2-featured.jpg',
          text: 'Justice In America – The Chinese-based Cayman Islands Renren Fraud Scam'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/reidcollins-1-featured.jpg',
          text: 'Reid Collins &amp; Tsai LLP - The Special Forces of Complex Business Litigation Law'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/bncllaw-twindle-featured.jpg',
          text: 'Justice in America - Sahleem Tindle’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/momsfightback-maralee-featured.jpg',
          text: 'Moms Fight Back - Maralee McLean’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/podboylaw-featured.jpg',
          text: 'Presumed Guilty Until Proven Innocent - Craig Booth’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/reidcollins-hernandez-featured.jpg',
          text: 'Justice In America – Olga Hernandez’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/murphyfalcon-green-featured.jpg',
          text: 'Prince George’s County Police Department Brutality &amp; Murder – William H. Green’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/Predatory-Guardianship-In-America’s-Courtrooms.jpg',
          text: 'Predatory Guardianships In America\'s Courtrooms - Oliver Wilson Bivins Sr.,\'s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/Seeking-Justice-for-US-Victims-of-State-Sponsored-Terrorism.jpg',
          text: 'Seeking Justice for US Victims of State Sponsored Terrorism'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/Human-Trafficking-Corporate-America’s-Role-in-Organized-Crime.jpg',
          text: 'Human Trafficking &amp; Corporate America’s Role in Organized Crime'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/Dupont’s-Poisoning-Of-America-–-Larry-Moody’s-Story.jpg',
          text: 'Dupont’s Poisoning Of America – Larry Moody’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/barack.jpg',
          text: 'Obama Hawaiian Africana Museum Network TV Special'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/coming-soon.jpg',
          text: 'Death In Hawaiian Paradise – Talia’s Law'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/Mueller-featured.jpg',
          text: 'Environmental Justice – The Race To Save Our Planet'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/wegis-bio-featured.jpg',
          text: 'Defender Of Justice – Ralph Wegis'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/burris-rider-featured.jpg',
          text: 'Oakland, Calif – A 21st Century Model of Policing'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/fiumara-childabuse-featured.jpg',
          text: 'America’s Child Sex Abuse Crisis – What You Need To Know'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/carcionelaw-featured.jpg',
          text: 'Remembering Ford’s Deadly Bronco On The Debut Of Their New 2021 Ford Bronco'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/fiumara-pred-featured.jpg',
          text: 'Spiritual Betrayal – The Catholic Church’s Sex Abuse Crisis'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/vegelerlaw-featured.jpg',
          text: 'BLACK… BUT NOT BLUE ENOUGH – A Black Police Officer’s Ordeal With Racism on the Force'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/arnoldreedlaw-featured.jpg',
          text: 'Congressman John Conyers, Jr – A Civil Rights Legend – Legacy Preserved'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/elderabuseadvocates-FEATURED.jpg',
          text: 'Brookdale Senior Living – Profits Over People'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/arnoldreedlaw-FEATUED.jpg',
          text: 'America’s Police-Citizen &amp; Civil Rights Crisis – What You Need To Know'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/muellerlaw-3-featured.jpg',
          text: 'Truth And Justice Die In The Darkness'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/muellerlaw-featured-1.jpg',
          text: 'The Courage of a Whistleblower'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/bcoonlaw-featured.jpg',
          text: 'BP\'s Texas City Disaster and Consequences'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/norinsberglaw-featured.jpg',
          text: 'Dr Leonard Morse Wins $7.7 Million against former NY ‘Luv Gov’ Eliot Spitzer’s Office'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/muller-featured.jpg',
          text: 'Condoms Do Not Equal Consent - Xan Wilson’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/mostynlaw-2-featured.jpg',
          text: 'Justice In America - Fighting for Hurricane Maria’s Victims’ Legal Rights'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/muellerlaw-feature.jpg',
          text: 'Dupont’s La Porte Explosion Disaster – Crystal Rae Wise’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/ralphwegis-featured.jpg',
          text: 'Jane Doe’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/13.jpg',
          text: 'Justice In America – Karen McWilliams\' Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/vkhorne-featured-1.jpg',
          text: 'Justice In America – Amy Petcovic’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/familypreservationfoundation-featured.jpg',
          text: 'Stop CPS From Legally Kidnapping Children'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/rutzicklaw-featured.jpg',
          text: 'Profits Before People - Janelle Castillon\'s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/soningenis-featured-1.jpg',
          text: 'Justice In America – Jesus Ferreira\'s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/broadfoot-featured.jpg',
          text: 'Justice In America – Aesop’s The Scorpion &amp; The Frog'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/soningenis-featured.jpg',
          text: 'Justice In America – Amber Rose Figueroa\'s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/ndvets-featured.jpg',
          text: 'New Directions For America’s Veterans'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/belllawfirm-featured.jpg',
          text: 'America\'s Medical Malpractice Crisis – What You Need To Know'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/socialjusticelawgroup-featured.jpg',
          text: 'Justice In America – Delaney Henderson\'s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/mcmillanlaw-featured.jpg',
          text: 'Justice In America – Deanna Fogarty\'s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/cochranfirmlaw-featured.jpg',
          text: 'Justice In America – Nicholas Robertson’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/davidarobinsonlaw-featured.jpg',
          text: 'Justice In America – Sidney Gurley’s Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/schwartzlawfirmpa-1-featured.jpg',
          text: 'Blue Cross Blue Shield - Profits Over People - James &amp; Gloria Linn’s Nightmare Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/edwardgarnolaw-featured.jpg',
          text: 'The Americans Disabilities Act – What You Need To Know - Somoza'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/reinerslaughter-featured.jpg',
          text: 'America’s "Hospital of Horrors" - Tenet Healthcare - The $400 Million Dollar Health Care Fraud Story'
        },
        {
          src: 'https://insiderexclusive.com/app/uploads/sites/3/173949southdakotajustice_main.jpg',
          text: 'American Indian Rights And Treaties - The Story Of The 1868 Treaty Of Fort Laramie'
        }
      ]
    }
  },
  mounted () {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length
    }, 5000)
  }
}
</script>

<style scoped lang="scss">
.app-carousel {
    width: 100%;
    max-width: 1200px;
    height: 450px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 60px rgba(1, 17, 29, 0.5);
}

.image-container {
  position: relative;
  width: 100%;
}

.image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.image-container.active {
    opacity: 1;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 72px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;

    .overlay--text {
        font-size: 22px;
        font-weight: 800;
        line-height: 1;
        color: #f8c52f;
    }
}
</style>
