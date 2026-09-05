const uniforms = [
    {
      id: 'u1',
      name: 'Traditional Uniform Set',
      price: 760.00,
      imageUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/469958669_1312994066808730_5405078896215908282_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHLX8eDBHRRejlNkqA-6RBJBkRU5W-yXjMGRFTlb7JeMx0RRH1-Y3227yOgJHjyTO-MI7eH6XNxrBg_YZeWwTbv&_nc_ohc=vE1hQOVmnDMQ7kNvwFnUw-V&_nc_oc=AdlbboWRXt1qNb_3_BZIcbVmtUEL1ItxHjAh0NEgIyF5O1iVxjG9Gk2LrdXrz3WwzdY&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=jrQNuyckWSDQ6iZGFcicFw&oh=00_AfFQvxDWjFQ2hXqjmlskpH3HCycg57JRAZ_ur0A__vnRLg&oe=681E9631',
      description: 'Comfortable and durable classic school uniform set.',
    },
    {
      id: 'u2',
      name: 'Premium Blazer',
      price: 920.00,
      imageUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/470220185_1314982029943267_3811247214457704998_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGZGxGJhS1PUHya8gGJ5NCrXNN721KEh1Bc03vbUoSHUKT3Ujbg6nbHo9t6Fn8a_sxkUyT2wBNn0lefrN6GXY6u&_nc_ohc=ZX1I8lFLI10Q7kNvwEjzCTH&_nc_oc=AdldQ6zQm_7AsBWMBcmsT3HJ7qGxwH5Z8jKbRd1jK4hRuMBkxmmkC_Swcgr0SevP_8c&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=B0kfklrBfNPvBtakLsTQMQ&oh=00_AfEkOFSwV7zha0dHA5emIjBXHNXDkwlYGnvKPPkmAV90lg&oe=681E81E3',
      description: 'Wool-blend blazer for formal events.',
    },
    //add more
    {
      id: 'u3',
      name: 'Medical Technology Uniform Set',
      price: 890.00,
      imageUrl: 'https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/469827450_1312994046808732_4004624441660453248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHbw662Ra37OcxW5sVLArVw9-fsBGEBP9r35-wEYQE_2lfi4fUog7bkEcbNtdDrYobyy48StMsvOffrEd-a9hf1&_nc_ohc=crWOBID9ZE8Q7kNvwFtZXMM&_nc_oc=Adn8hkGhBObK66y20Qe1OVz7Tl_fn1aDnR1b_y155Bsqtqj7FT-Eb4KJzoE8nyDsYhI&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&_nc_gid=pbNbwmaFSFh3wrzg3b5vFg&oh=00_AfKTeIkeJt2SnR5hpKHBq8FFcHXWwIaySbFiBFuW5LAlJw&oe=68212262',
      description: 'A White Uniform with Green line for Medical Technology Students',
    },
    {
      id: 'u4',
      name: 'Pharmacy Uniform Set',
      price: 890.00,
      imageUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/469666435_1312994253475378_2873329139798243217_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGy5RrI2gJnnfhlnofI6RB4rCzdOBqnujWsLN04Gqe6Na5YqSvoA8aovuJhtjD6QkFoWXZTI68v3EFy6Hr4km33&_nc_ohc=v47S7y4XD0kQ7kNvwGeZVFZ&_nc_oc=Adl3Va76PyMuoXjKGUG6SOGIVRWbViHkInwQ76Pzwx4vI5_G2Od4aQPFhdjJ6kjdBEg&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=x_gzIJnho5NFREE_EkYoSg&oh=00_AfITCpWmGKhWV-gpQvP1jFLGK4K9_I9MUzP-ruUMdjkmmg&oe=68210987',
      description: 'A White Uniform with Brown line for Pharmacy Students',
    },
    {
      id: 'u5',
      name: 'Psychology Uniform Set',
      price: 890.00,
      imageUrl: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/469908183_1312994263475377_2528429429302806944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGXaS_0gWZvx9PgZemDPMP7wsoc-A5jdyHCyhz4DmN3IVJdEURwSF4KVuMpET9IgcgiWJvneor7_5hsN20WU6Bq&_nc_ohc=KJohm0OGoO4Q7kNvwFu6ZRP&_nc_oc=AdnqHqzH--BV1BjPoxxPT-MkGhK1qBKXkdmCee5Giz4DNP4_wYl67HE4bGuYi96rXjE&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=xgt5XW84LuYs1LhROTyvvg&oh=00_AfKx_mff61u2lep9r2sn2eUxy1T77O2xd92GwQhlAkTSKg&oe=68212554',
      description: 'A White Uniform with Gold line for Psychology Students',
    },
    {
      id: 'u6',
      name: 'Dental Laboratory Technology Uniform Set',
      price: 890.00,
      imageUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/469821235_1312994200142050_8265296414832522764_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFy9fjKpF4wPoaaAq2u9iy0HHgUC3uQpXgceBQLe5CleClfWaGhIbEi4s6cF0Ag0Ui8OYgMXRHRcvHOEef1dhIo&_nc_ohc=Y41tYKKSPDkQ7kNvwEHwGRM&_nc_oc=AdkLAhPPNntzfmJeZcLIkv1DFEJzcsmebH2CA-9nzKKGtpBoZi9Xg3Isg4U1F4smBdY&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=XiSwhgQwIWx0VyB5o7enCg&oh=00_AfLaOA9MZZPqk010X-fxD5qJ56tOjoaY0m8_BGWX-NYfTw&oe=6821123B',
      description: 'A White Uniform with Red line for Dental Laboratory Technology Students',
    },
    {
      id: 'u7',
      name: 'Dental Medicine Uniform Set',
      price: 890.00,
      imageUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/469892789_1312994286808708_5962144026483613947_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFTEos5wifMZw8Bx6vKkfxbFzAgj8W8YyoXMCCPxbxjKroggU3Za0qREju83rDtEAQO16siKWZgaqcPshY6k2dr&_nc_ohc=wz5KXH7ZnTsQ7kNvwEpZsdK&_nc_oc=AdlTB7kqSZ2fxSNvJFMmLUoynO0E6WaQ4IUEIOTIy4s3pLvROBcBdgD53_IM0LvaKnA&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=qsEpOpZOo1jzjYqrU1CgyQ&oh=00_AfLp-u7G58GrLVd7fCQeoThJFZ65TaX-n296Y5QOqV5hRA&oe=68210F71',
      description: 'A White Uniform with Purple line for Dental Medicine Uniform Students',
    },
  ];
  
  export default uniforms;
  