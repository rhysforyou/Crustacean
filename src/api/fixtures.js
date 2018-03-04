// @flow
export type UserProfile = {
  username: string,
  created_at: string,
  is_admin: boolean,
  about: string,
  is_moderator: boolean,
  karma: number,
  avatar_url: string
}

export type StorySummary = {
  short_id: string,
  short_id_url: string,
  created_at: string,
  title: string,
  url: string,
  score: number,
  upvotes: number,
  downvotes: number,
  comment_count: number,
  description: string,
  comments_url: string,
  submitter_user: UserProfile,
  tags: string[]
}

export const hottestStoriesFixture: StorySummary[] = [
  {
    short_id: 'gwzrlh',
    short_id_url: 'https://lobste.rs/s/gwzrlh',
    created_at: '2018-03-03T10:31:10.000-06:00',
    title:
      'Nim v0.18.0: formatted string literals, testable documentation examples and hundreds of bug fixes',
    url:
      'https://nim-lang.org/blog/2018/03/01/version-0180-released.html?ref=lrs',
    score: 16,
    upvotes: 16,
    downvotes: 0,
    comment_count: 2,
    description: '',
    comments_url:
      'https://lobste.rs/s/gwzrlh/nim_v0_18_0_formatted_string_literals',
    submitter_user: {
      username: 'dom',
      created_at: '2016-06-07T11:03:55.000-05:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 87,
      avatar_url: 'https://lobste.rs/avatars/dom-100.png'
    },
    tags: ['programming']
  },
  {
    short_id: '8rmyvv',
    short_id_url: 'https://lobste.rs/s/8rmyvv',
    created_at: '2018-03-03T12:47:37.000-06:00',
    title: 'The how and why of the Fennel compiler',
    url: 'https://technomancy.us/186',
    score: 12,
    upvotes: 12,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url: 'https://lobste.rs/s/8rmyvv/how_why_fennel_compiler',
    submitter_user: {
      username: 'technomancy',
      created_at: '2014-03-02T12:11:55.000-06:00',
      is_admin: false,
      about:
        '[Hacker Errant](http://technomancy.us/colophon).\r\n\r\n* Emacs\r\n* [Functional programming](https://leiningen.org)\r\n* [Purveyor of custom keyboards](https://atreus.technomancy.us)\r\n* [Spaceflight programming adventure game](https://technomancy.itch.io/bussard)\r\n* Posting on [Mastodon](https://icosahedron.website/@technomancy)/Fediverse',
      is_moderator: false,
      karma: 1734,
      avatar_url: 'https://lobste.rs/avatars/technomancy-100.png'
    },
    tags: ['compilers', 'lisp', 'lua']
  },
  {
    short_id: 'cgqz3p',
    short_id_url: 'https://lobste.rs/s/cgqz3p',
    created_at: '2018-03-03T18:03:38.000-06:00',
    title: 'Do we need to move away from Elm?',
    url:
      'https://www.reddit.com/r/elm/comments/81bo14/do_we_need_to_move_away_from_elm/',
    score: 4,
    upvotes: 4,
    downvotes: 0,
    comment_count: 4,
    description: '',
    comments_url: 'https://lobste.rs/s/cgqz3p/do_we_need_move_away_from_elm',
    submitter_user: {
      username: 'zpojqwfejwfhiunz',
      created_at: '2017-10-02T13:57:42.000-05:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 540,
      avatar_url: 'https://lobste.rs/avatars/zpojqwfejwfhiunz-100.png'
    },
    tags: ['elm']
  },
  {
    short_id: '8k4par',
    short_id_url: 'https://lobste.rs/s/8k4par',
    created_at: '2018-03-03T02:44:40.000-06:00',
    title:
      '"APL follows a set of practices that directly contradict traditional programming wisdom" [slides]',
    url: 'https://sway.com/b1pRwmzuGjqB30On',
    score: 20,
    upvotes: 20,
    downvotes: 0,
    comment_count: 7,
    description: '',
    comments_url:
      'https://lobste.rs/s/8k4par/apl_follows_set_practices_directly',
    submitter_user: {
      username: 'akkartik',
      created_at: '2013-11-20T11:02:59.000-06:00',
      is_admin: false,
      about: 'Kartik Agaram\r\n\r\nhttp://akkartik.name/about',
      is_moderator: false,
      karma: 537,
      avatar_url: 'https://lobste.rs/avatars/akkartik-100.png',
      github_username: 'akkartik'
    },
    tags: ['programming']
  },
  {
    short_id: 'l5nmta',
    short_id_url: 'https://lobste.rs/s/l5nmta',
    created_at: '2018-03-03T11:19:46.000-06:00',
    title: 'An Intro to 64-bit Intel Reverse Engineering',
    url:
      'https://leotindall.com/tutorial/an-intro-to-x86_64-reverse-engineering/',
    score: 8,
    upvotes: 8,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/l5nmta/intro_64_bit_intel_reverse_engineering',
    submitter_user: {
      username: 'LeoLambda',
      created_at: '2018-03-02T09:56:22.000-06:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 9,
      avatar_url: 'https://lobste.rs/avatars/LeoLambda-100.png',
      github_username: 'LeoTindall'
    },
    tags: ['assembly', 'c', 'reversing', 'security']
  },
  {
    short_id: 'omgnew',
    short_id_url: 'https://lobste.rs/s/omgnew',
    created_at: '2018-03-03T04:12:14.000-06:00',
    title: 'Creating a bash completion script',
    url:
      'https://iridakos.com/tutorials/2018/03/01/bash-programmable-completion-tutorial.html',
    score: 17,
    upvotes: 17,
    downvotes: 0,
    comment_count: 1,
    description: '',
    comments_url: 'https://lobste.rs/s/omgnew/creating_bash_completion_script',
    submitter_user: {
      username: 'iridakos',
      created_at: '2018-03-03T04:07:07.000-06:00',
      is_admin: false,
      about:
        "I usually code in Ruby especially when it's on Rails and in Go. I also speak Java, bash \u0026 C#.\r\nI am an open source enthusiast and I like helping developers with tutorials and tools I create.\r\nI publish tech related posts on my personal website [iridakos.com](https://iridakos.com)",
      is_moderator: false,
      karma: 24,
      avatar_url: 'https://lobste.rs/avatars/iridakos-100.png',
      github_username: 'iridakos'
    },
    tags: ['linux', 'programming', 'unix']
  },
  {
    short_id: 'firnbl',
    short_id_url: 'https://lobste.rs/s/firnbl',
    created_at: '2018-03-03T12:52:38.000-06:00',
    title: 'wmutils - a unix style approach to window management',
    url: 'https://github.com/wmutils',
    score: 9,
    upvotes: 9,
    downvotes: 0,
    comment_count: 1,
    description: '',
    comments_url:
      'https://lobste.rs/s/firnbl/wmutils_unix_style_approach_window',
    submitter_user: {
      username: 'zge',
      created_at: '2017-11-19T11:49:35.000-06:00',
      is_admin: false,
      about:
        'CS student and hobby developer. Egalitarian esoteric. Various interests. \r\n\r\n[Homepage](https://dyst.ax.lt/~phi/)',
      is_moderator: false,
      karma: 435,
      avatar_url: 'https://lobste.rs/avatars/zge-100.png',
      github_username: 'phikal'
    },
    tags: ['unix']
  },
  {
    short_id: 'qkspmx',
    short_id_url: 'https://lobste.rs/s/qkspmx',
    created_at: '2018-03-03T15:28:08.000-06:00',
    title: 'Deconstructing the water effect in Super Mario Sunshine',
    url:
      'http://blog.mecheye.net/2018/03/deconstructing-the-water-effect-in-super-mario-sunshine/',
    score: 7,
    upvotes: 7,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/qkspmx/deconstructing_water_effect_super_mario',
    submitter_user: {
      username: 'soulcutter',
      created_at: '2014-02-18T10:29:29.000-06:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 1620,
      avatar_url: 'https://lobste.rs/avatars/soulcutter-100.png',
      twitter_username: 'soulcutter'
    },
    tags: ['games', 'graphics']
  },
  {
    short_id: 'eh3lss',
    short_id_url: 'https://lobste.rs/s/eh3lss',
    created_at: '2018-03-03T20:54:02.000-06:00',
    title: 'Pierre Menard, Inventor of LISP',
    url:
      'https://medium.com/@old_sound/pierre-menard-inventor-of-lisp-5ddc12c1363e',
    score: 2,
    upvotes: 2,
    downvotes: 0,
    comment_count: 1,
    description: '',
    comments_url: 'https://lobste.rs/s/eh3lss/pierre_menard_inventor_lisp',
    submitter_user: {
      username: 'Yogthos',
      created_at: '2017-05-26T15:31:12.000-05:00',
      is_admin: false,
      about: 'A sentience trapped in a prison of meat.\r\nhttp://yogthos.net/',
      is_moderator: false,
      karma: 1462,
      avatar_url: 'https://lobste.rs/avatars/Yogthos-100.png'
    },
    tags: ['lisp', 'programming']
  },
  {
    short_id: 'chihth',
    short_id_url: 'https://lobste.rs/s/chihth',
    created_at: '2018-03-03T11:25:35.000-06:00',
    title: 'Twitter is not a public utility',
    url:
      'https://medium.com/@Gargron/twitter-is-not-a-public-utility-2bc49567152b',
    score: 18,
    upvotes: 19,
    downvotes: 1,
    comment_count: 5,
    description: '',
    comments_url: 'https://lobste.rs/s/chihth/twitter_is_not_public_utility',
    submitter_user: {
      username: 'nolan',
      created_at: '2018-01-06T13:39:52.000-06:00',
      is_admin: false,
      about:
        'Website: https://nolanlawson.com/\r\nMastodon: https://toot.cafe/@nolan',
      is_moderator: false,
      karma: 17,
      avatar_url: 'https://lobste.rs/avatars/nolan-100.png'
    },
    tags: ['culture', 'distributed']
  },
  {
    short_id: 'cubahb',
    short_id_url: 'https://lobste.rs/s/cubahb',
    created_at: '2018-03-03T11:38:02.000-06:00',
    title: 'You can now upload 3D models to Wikimedia Commons',
    url: 'https://blog.wikimedia.org/2018/02/20/three-dimensional-models/',
    score: 8,
    upvotes: 8,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/cubahb/you_can_now_upload_3d_models_wikimedia',
    submitter_user: {
      username: 'pizzaiolo',
      created_at: '2016-10-22T09:37:00.000-05:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 2505,
      avatar_url: 'https://lobste.rs/avatars/pizzaiolo-100.png'
    },
    tags: ['design']
  },
  {
    short_id: '9fjs9y',
    short_id_url: 'https://lobste.rs/s/9fjs9y',
    created_at: '2018-03-03T06:22:17.000-06:00',
    title: 'JDK 10 brings local type inference with var keyword',
    url:
      'http://benjiweber.co.uk/blog/2018/03/03/representing-the-impractical-and-impossible-with-jdk-10-var/',
    score: 14,
    upvotes: 14,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/9fjs9y/jdk_10_brings_local_type_inference_with',
    submitter_user: {
      username: 'magikid',
      created_at: '2016-01-06T14:41:00.000-06:00',
      is_admin: false,
      about:
        '* Email me ([PGP Key](https://keybase.io/magikid/key.asc)) at chris@christopherjones.us\r\n* Tweet me at [@magikid](https://twitter.com/magikid)\r\n',
      is_moderator: false,
      karma: 188,
      avatar_url: 'https://lobste.rs/avatars/magikid-100.png',
      github_username: 'magikid'
    },
    tags: ['java']
  },
  {
    short_id: 'p8atdr',
    short_id_url: 'https://lobste.rs/s/p8atdr',
    created_at: '2018-03-03T18:54:25.000-06:00',
    title: 'When is a senior engineer not a senior engineer?',
    url: 'http://www.mooreds.com/wordpress/archives/2812',
    score: 2,
    upvotes: 2,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/p8atdr/when_is_senior_engineer_not_senior',
    submitter_user: {
      username: 'goncalo',
      created_at: '2015-01-25T17:10:37.000-06:00',
      is_admin: false,
      about:
        "I am a Hacker at Amazon in Dublin, Ireland and I'm currently working in the security group as a Systems Engineer. Some of my computational interests lie in Operating Systems, Virtualization, Security, Distributed Systems, Algorithms, Functional Languages, Compiler and Language Theory. I run a simple site. http://promisc.org/",
      is_moderator: false,
      karma: 194,
      avatar_url: 'https://lobste.rs/avatars/goncalo-100.png'
    },
    tags: ['job', 'philosophy', 'practices']
  },
  {
    short_id: 'ajeced',
    short_id_url: 'https://lobste.rs/s/ajeced',
    created_at: '2018-03-03T20:39:15.000-06:00',
    title: 'Macros in Elixir and Clojure',
    url: 'https://rockyj.in/2018/03/03/macros_elixir_clojure.html',
    score: 1,
    upvotes: 1,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url: 'https://lobste.rs/s/ajeced/macros_elixir_clojure',
    submitter_user: {
      username: 'calvin',
      created_at: '2014-07-01T06:47:13.000-05:00',
      is_admin: false,
      about:
        'Soon we will all have special names... names designed to make the cathode ray tube resonate.\r\n\r\nMastodon: [@calvin@cronk.stenoweb.net](https://cronk.stenoweb.net/@calvin)\r\n\r\n[website](http://minisoc.xyz)/`cal` `vin `{a}` `{t}` `cmpct.info`',
      is_moderator: false,
      karma: 23694,
      avatar_url: 'https://lobste.rs/avatars/calvin-100.png',
      github_username: 'NattyNarwhal'
    },
    tags: ['clojure', 'elixir']
  },
  {
    short_id: 'ycib0e',
    short_id_url: 'https://lobste.rs/s/ycib0e',
    created_at: '2018-03-02T23:04:11.000-06:00',
    title: 'Doom as a tool for system administration [1999]',
    url: 'https://www.cs.unm.edu/~dlchao/flake/doom/',
    score: 13,
    upvotes: 13,
    downvotes: 0,
    comment_count: 2,
    description: '',
    comments_url:
      'https://lobste.rs/s/ycib0e/doom_as_tool_for_system_administration',
    submitter_user: {
      username: 'xi',
      created_at: '2017-12-28T11:08:35.000-06:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 46,
      avatar_url: 'https://lobste.rs/avatars/xi-100.png'
    },
    tags: ['historical', 'unix']
  },
  {
    short_id: 'm7gvfm',
    short_id_url: 'https://lobste.rs/s/m7gvfm',
    created_at: '2018-03-03T14:49:51.000-06:00',
    title: 'Large Scale NoSQL Database Migration Under Fire',
    url:
      'https://medium.com/appsflyer/large-scale-nosql-database-migration-under-fire-bf298c3c2e47',
    score: 2,
    upvotes: 2,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/m7gvfm/large_scale_nosql_database_migration',
    submitter_user: {
      username: 'furkansahin',
      created_at: '2018-03-03T14:48:14.000-06:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 1,
      avatar_url: 'https://lobste.rs/avatars/furkansahin-100.png'
    },
    tags: ['databases']
  },
  {
    short_id: 'suvvaj',
    short_id_url: 'https://lobste.rs/s/suvvaj',
    created_at: '2018-03-03T09:51:36.000-06:00',
    title:
      'Tyr: A Dependent, Type System for Spatial, Memory Safety in LLVM (2016)',
    url: 'https://core.ac.uk/download/pdf/82404884.pdf',
    score: 4,
    upvotes: 4,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/suvvaj/tyr_dependent_type_system_for_spatial',
    submitter_user: {
      username: 'nickpsecurity',
      created_at: '2016-07-28T14:11:08.000-05:00',
      is_admin: false,
      about:
        'Security engineer/researcher specializing in high-assurance solutions. Especially countering subversion or attacks from high-strength attackers. Also, try to dig up and post insights from academic research, CompSci history, and obscure sources. ',
      is_moderator: false,
      karma: 8645,
      avatar_url: 'https://lobste.rs/avatars/nickpsecurity-100.png'
    },
    tags: ['compilers', 'pdf', 'plt']
  },
  {
    short_id: '1rzj2d',
    short_id_url: 'https://lobste.rs/s/1rzj2d',
    created_at: '2018-03-02T12:50:37.000-06:00',
    title: 'synapse 1.0-rc1: a lightweight bittorrent daemon written in Rust',
    url: 'https://synapse-bt.org',
    score: 31,
    upvotes: 31,
    downvotes: 0,
    comment_count: 12,
    description: '',
    comments_url:
      'https://lobste.rs/s/1rzj2d/synapse_1_0_rc1_lightweight_bittorrent',
    submitter_user: {
      username: 'SirCmpwn',
      created_at: '2016-11-24T12:13:03.000-06:00',
      is_admin: false,
      about: 'https://drewdevault.com',
      is_moderator: false,
      karma: 96,
      avatar_url: 'https://lobste.rs/avatars/SirCmpwn-100.png'
    },
    tags: ['release', 'rust']
  },
  {
    short_id: 'cerexl',
    short_id_url: 'https://lobste.rs/s/cerexl',
    created_at: '2018-03-03T13:27:43.000-06:00',
    title: 'Restoring the original source code for FORTH on the IBM 1130',
    url:
      'http://rescue1130.blogspot.com/2018/03/restoring-original-source-code-for.html',
    score: 2,
    upvotes: 2,
    downvotes: 0,
    comment_count: 0,
    description:
      '\u003cp\u003eThis story actually starts in the second half of the preceding blog entry:\u003c/p\u003e\n\u003cp\u003e\u003ca href="https://rescue1130.blogspot.com/2018/02/built-battery-for-roomba-discovered.html" rel="nofollow"\u003ehttps://rescue1130.blogspot.com/2018/02/built-battery-for-roomba-discovered.html\u003c/a\u003e\u003c/p\u003e\n',
    comments_url:
      'https://lobste.rs/s/cerexl/restoring_original_source_code_for_forth',
    submitter_user: {
      username: 'kencausey',
      created_at: '2014-03-11T21:48:55.000-05:00',
      is_admin: false,
      about: '',
      is_moderator: false,
      karma: 26,
      avatar_url: 'https://lobste.rs/avatars/kencausey-100.png'
    },
    tags: ['historical']
  },
  {
    short_id: 'jdm7vy',
    short_id_url: 'https://lobste.rs/s/jdm7vy',
    created_at: '2018-03-02T12:39:43.000-06:00',
    title: 'GitHub auto-generated tarballs vs releases',
    url: 'https://marc.info/?l=openbsd-ports\u0026m=151973450514279\u0026w=2',
    score: 19,
    upvotes: 19,
    downvotes: 0,
    comment_count: 16,
    description: '',
    comments_url:
      'https://lobste.rs/s/jdm7vy/github_auto_generated_tarballs_vs',
    submitter_user: {
      username: 'mulander',
      created_at: '2015-05-14T09:23:45.000-05:00',
      is_admin: false,
      about:
        'Twitter : @mulander\r\n\r\nBlog    : http://blog.tintagel.pl/\r\n\r\nWork    : https://koparo.com\r\n\r\nCo-Founder of koparo.com\r\n\r\nDesign and active development of the Koparo core services, databases \u0026 infrastructure.\r\nAdditionally responsible for release engineering, code quality improvements, orchestration of Koparo services and service reliability.',
      is_moderator: false,
      karma: 7141,
      avatar_url: 'https://lobste.rs/avatars/mulander-100.png'
    },
    tags: ['openbsd', 'practices']
  },
  {
    short_id: 'eetdz9',
    short_id_url: 'https://lobste.rs/s/eetdz9',
    created_at: '2018-03-02T16:39:15.000-06:00',
    title: 'Knife Sharpening Experiments',
    url:
      'https://www.scribd.com/document/10050000/Knife-Sharpening-Experiments',
    score: 18,
    upvotes: 18,
    downvotes: 0,
    comment_count: 6,
    description: '',
    comments_url: 'https://lobste.rs/s/eetdz9/knife_sharpening_experiments',
    submitter_user: {
      username: 'friendlysock',
      created_at: '2014-02-20T00:43:41.000-06:00',
      is_admin: false,
      about:
        '*Literally* full of ants.\r\n\r\nFriendly engineer and human being.\r\n\r\nStrong opinions held weakly, sometimes weekly.\r\n\r\nHit me up at "ch" plus "ris" (at) "k" plus "e" plus "dagital" dot com.\r\n\r\n\u003e Gentrification is the process by which nebulous threats are pacified and alchemised into money. \r\n',
      is_moderator: false,
      karma: 14492,
      avatar_url: 'https://lobste.rs/avatars/friendlysock-100.png'
    },
    tags: ['hardware', 'science']
  },
  {
    short_id: 'agmjin',
    short_id_url: 'https://lobste.rs/s/agmjin',
    created_at: '2018-03-03T09:55:10.000-06:00',
    title:
      'Continuation-Passing C: compiling threads to events through continuations (2010)',
    url: 'https://arxiv.org/pdf/1011.4558',
    score: 3,
    upvotes: 3,
    downvotes: 0,
    comment_count: 0,
    description:
      '\u003cp\u003eAbstract: “In this paper, we introduce Continuation Passing C (CPC), a programming language for concurrent systems in which native and cooperative threads are unified and presented to the programmer as a single abstraction. The CPC compiler uses a compilation technique, based on the CPS transform, that yields efficient code and an extremely lightweight representation for contexts. We provide a proof of the correctness of our compilation scheme. We show in particular that lambda-lifting, a common compilation technique for functional languages, is also correct in an imperative language like C, under some conditions enforced by the CPC compiler. The current CPC compiler is mature enough to write substantial programs such as Hekate, a highly concurrent BitTorrent seeder. Our benchmark results show that CPC is as efficient, while using significantly less space, as the most efficient thread libraries available.”\u003c/p\u003e\n\u003cp\u003eGithub \u003ca href="https://github.com/kerneis/cpc" rel="nofollow"\u003ehere\u003c/a\u003e.\u003c/p\u003e\n',
    comments_url: 'https://lobste.rs/s/agmjin/continuation_passing_c_compiling',
    submitter_user: {
      username: 'nickpsecurity',
      created_at: '2016-07-28T14:11:08.000-05:00',
      is_admin: false,
      about:
        'Security engineer/researcher specializing in high-assurance solutions. Especially countering subversion or attacks from high-strength attackers. Also, try to dig up and post insights from academic research, CompSci history, and obscure sources. ',
      is_moderator: false,
      karma: 8645,
      avatar_url: 'https://lobste.rs/avatars/nickpsecurity-100.png'
    },
    tags: ['c', 'compilers', 'pdf']
  },
  {
    short_id: '0wdmrk',
    short_id_url: 'https://lobste.rs/s/0wdmrk',
    created_at: '2018-03-03T01:31:53.000-06:00',
    title: 'Getting into git init',
    url: 'https://blog.safia.rocks/post/171448973555/getting-into-git-init',
    score: 8,
    upvotes: 8,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url: 'https://lobste.rs/s/0wdmrk/getting_into_git_init',
    submitter_user: {
      username: 'j11g',
      created_at: '2017-07-17T09:39:28.000-05:00',
      is_admin: false,
      about:
        'Hi! I blog here https://j11g.com and here https://piks.nl and co-host a Dutch podcast: https://brug.info',
      is_moderator: false,
      karma: 260,
      avatar_url: 'https://lobste.rs/avatars/j11g-100.png',
      twitter_username: 'loginn'
    },
    tags: ['vcs']
  },
  {
    short_id: '01dnmj',
    short_id_url: 'https://lobste.rs/s/01dnmj',
    created_at: '2018-03-03T06:17:42.000-06:00',
    title: 'Learning the Language of Functional Programming',
    url:
      'https://maxhallinan.com/posts/2018/03/03/learning-the-language-of-functional-programming/',
    score: 2,
    upvotes: 2,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url: 'https://lobste.rs/s/01dnmj/learning_language_functional',
    submitter_user: {
      username: 'maxhallinan',
      created_at: '2017-07-05T09:16:05.000-05:00',
      is_admin: false,
      about: '[https://www.maxhallinan.com/](https://www.maxhallinan.com/)',
      is_moderator: false,
      karma: 139,
      avatar_url: 'https://lobste.rs/avatars/maxhallinan-100.png',
      github_username: 'maxhallinan'
    },
    tags: ['elm', 'programming']
  },
  {
    short_id: 'agwgjn',
    short_id_url: 'https://lobste.rs/s/agwgjn',
    created_at: '2018-03-03T11:05:19.000-06:00',
    title: 'Designing for Understandability: The Raft Consensus Algorithm',
    url: 'https://www.youtube.com/watch?v=vYp4LYbnnW8',
    score: 2,
    upvotes: 2,
    downvotes: 0,
    comment_count: 0,
    description: '',
    comments_url:
      'https://lobste.rs/s/agwgjn/designing_for_understandability_raft',
    submitter_user: {
      username: 'avita1',
      created_at: '2014-11-13T12:09:07.000-06:00',
      is_admin: false,
      about: 'Scala is cool.',
      is_moderator: false,
      karma: 21,
      avatar_url: 'https://lobste.rs/avatars/avita1-100.png'
    },
    tags: ['distributed', 'video']
  }
]
