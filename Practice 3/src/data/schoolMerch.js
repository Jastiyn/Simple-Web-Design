

const schoolMerch = [
    {
      id: 'm1',
      name: 'School ID Lace',
      price: 100.00,
      imageUrl: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/472759894_1331728938268576_7780814197135623156_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFUaoPqgnkB-lVbQ4H22rBiRqzdDlKFd29GrN0OUoV3b78kLFRyTX6VCMkkaEwDbwFh9FxzKPzTB8YN_z0VKPHf&_nc_ohc=ugJPqeVkeLEQ7kNvwE7CYFl&_nc_oc=Adm3SJHSRdeje1QlL6_MNH01Bk4FhJilA2bFqX5m55mlOnc191y4iVwGgtA5l8r1N2k&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=MJhkrJeQ3uCJNtjjUIrGqw&oh=00_AfHCO_AMbcPc1kt7QHVUvsNBG0NrEKdNLkwuXRXhhne0cw&oe=681E88E0',
      description: 'Cozy hoodie with school logo.',
    },
    {
      id: 'm2',
      name: 'Windbreaker School Hoodie',
      price: 299.00,
      imageUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/472333798_1331029615005175_4497969126398793883_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCvPfsDQemT9XfIkiXHM1y-vDpcsBQ7pX68OlywFDulaxFGH6XxcMB7zmpMAFY4Zj4-R_c3qqyAnQdo8ey1HUk&_nc_ohc=arjDB6MRqI8Q7kNvwE9HSL7&_nc_oc=Adnpue1mHJmMGE2xKUzvnuqRqs1LX_Ny5xaIV5S4i33a1ti857QwNx_N1146b5Sn7Vo&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=3IZ4qTKCxvffyroPGFGH_Q&oh=00_AfHKipcIRJZPVsa6BcRnhA0MfZ_mau8FGvcIOrTq764VBw&oe=681E9323',
      description: 'Ceramic mug with school emblem.',
    },
    // …add more items as needed
    {
      id: 'm3',
      name: 'NU Bag Tag',
      price: 45.00,
      imageUrl: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/469494258_1312368613537942_7637345218561107250_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMLlz4-TjUMNaeCDQeM3vAxGmVljdVT4TEaZWWN1VPhLVCfORvxn852KowqngWypmF4Pptc3okvpohAbrCGoX4&_nc_ohc=yfl8fuylMDMQ7kNvwGQz1sO&_nc_oc=AdlSTIvJb5L9PYrxieCCTsgZgedYb-INB0NWSxCbUJQKb4yEgoFQrgSJJRUzZietaxo&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=KKgWDfZ_UP75Wxtsm7X-qQ&oh=00_AfLtP6vJQHMTVBFjuKrFEJnIot5q7miBe3Kx5l07dkZfzA&oe=68212D14',
      description: 'Bag Tag with National University Logo.',
    },
    {
      id: 'm4',
      name: 'NU Hoodie',
      price: 499.00,
      imageUrl: 'https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/469317920_1310507743724029_4601608953354768849_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG2UvHB2yLw40n41EXVyrnQ-Ej2gpXLE4P4SPaClcsTg50M_fpfEEXdea1M8ncSjKMt9Gg7jYefet1G1efbKDHL&_nc_ohc=FtUOOPzPBFoQ7kNvwGxgE2a&_nc_oc=AdnHwnbtgUF9OvWlrXcyMSFM5yXwh6IlH3zfV2OapesEPcGZQZw41PoTpCusAsedqjI&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=_1tPDAL83FL3RpE8KK__Aw&oh=00_AfK_W08WcFj2dBuURr2V4XJaJRwnRrQZhvD5Ts8WDp9C5A&oe=68212B29',
      description: 'Hoodie with National University Logo.',
    },
    {
      id: 'm5',
      name: 'NU Cap',
      price: 150.00,
      imageUrl: 'https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.6435-9/193946894_511284076979737_2938984716929519182_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsKsx_jjdHR1PIqFAMezfTG-bL8FhJdwAb5svwWEl3AAnIPLIXhFg_b-9hsr4-jVBSp_vaIioNSFtRVekYEPPy&_nc_ohc=MtufuvJTHwsQ7kNvwGgHrH6&_nc_oc=Adn4rTfm4OidsZdgUaLKrLXH66wpzPOsWPMtGy07j4e4lys_WZwNLzgI8j-Pj6MunAo&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&_nc_gid=TY0pojexHRLcYBa3Z9HKBA&oh=00_AfKSiKZ_Yf4gjQyTiQlOZmc0RSehGHq6u9RNL6ESm6FoVw&oe=6842AEC6',
      description: 'Adjustable Cap with NU and Bulldog Design',
    },
    {
      id: 'm6',
      name: 'NU Bulldog Pin',
      price: 30.00,
      imageUrl: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/193718778_511269803647831_2743205953032775898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAxUMLl4PjFayknI-GZ_K9n--wK_jsRYCf77Ar-OxFgJSwrxcdVootTm03lw-skZubnZ4bkdUFu3NuyeI30xF9&_nc_ohc=jl97v3icV7YQ7kNvwEM0z6p&_nc_oc=AdkydoQI-sYicwi2rPdWIb2AWnIbxa1eWqLwS2BnFAS5lGlZCXtP0rX9efW9Ra_z92w&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=69KZJG0S7XLmz0T1F3mlZA&oh=00_AfLoMqjLrPSJXrVWaOrPSvymF-heCSxVf1y44u_5rTg8XA&oe=6842D2BB',
      description: 'A Pin with National University Bulldogs Design',
    },
    {
      id: 'm7',
      name: 'NU Mug',
      price: 120.00,
      imageUrl: 'https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.6435-9/194430687_511269546981190_2920758391430264402_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFV8ogHJTuK3Rl4zwAn2hLhHcFLrbQJl58dwUuttAmXn_kJr_bmLdL4u0KDJzLkaLOOqhte3pZeUwnRAgpX5jmm&_nc_ohc=SdwloMTH4uQQ7kNvwHCe6sM&_nc_oc=Adn9alZBLcuXRZWgpoPAuX9z2m8Ph9ayJw0MB4WBgiA5r7OIzOvRfN_pFK6nlk7IEZg&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=s0k_o4cCiOSf13hjqM55DQ&oh=00_AfKYU1FabjGwy3JCKMHZTyEwkf1BhLwiMLpqrfR11T1fmA&oe=6842AA87',
      description: 'A Mug with National University Logo',
    },
  ];
  
  export default schoolMerch;
  