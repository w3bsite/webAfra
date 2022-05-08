export const state = () => ({
  categoryMenu: false as boolean,
  categoryArray: [
    {
      name: 'باتری',
      list: [
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'تبلت', list: ['samsung', 'lenovo', 'acer', 'htc', 'alcatel', 'nokia']},
        {product: 'ساعت هوشمند', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'باتری قلمی', list: ['osel', 'onix', 'dewoo', 'DBK', 'sony', 'hyundai']},
      ]
    },
    {
      name: 'ساعت هوشمند',
      list: [
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'تبلت', list: ['samsung', 'lenovo', 'acer', 'htc', 'alcatel', 'nokia']},
        {product: 'ساعت هوشمند', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'باتری قلمی', list: ['osel', 'onix', 'dewoo', 'DBK', 'sony', 'hyundai']},
      ]
    },
    {
      name: 'قطعات',
      list: [
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'تبلت', list: ['samsung', 'lenovo', 'acer', 'htc', 'alcatel', 'nokia']},
        {product: 'ساعت هوشمند', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'باتری قلمی', list: ['osel', 'onix', 'dewoo', 'DBK', 'sony', 'hyundai']},
      ]
    },
    {
      name: 'لوازم جانبی',
      list: [
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'تبلت', list: ['samsung', 'lenovo', 'acer', 'htc', 'alcatel', 'nokia']},
        {product: 'ساعت هوشمند', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'باتری قلمی', list: ['osel', 'onix', 'dewoo', 'DBK', 'sony', 'hyundai']},
      ]
    },
    {
      name: 'نقد و بررسی',
      list: [
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'تبلت', list: ['samsung', 'lenovo', 'acer', 'htc', 'alcatel', 'nokia']},
        {product: 'ساعت هوشمند', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'باتری قلمی', list: ['osel', 'onix', 'dewoo', 'DBK', 'sony', 'hyundai']},
      ]
    },
    {
      name: 'آموزش',
      list: [
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'تبلت', list: ['samsung', 'lenovo', 'acer', 'htc', 'alcatel', 'nokia']},
        {product: 'ساعت هوشمند', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'موبایل', list: ['samsung', 'huawei', 'apple', 'sony', 'lg', 'nokia']},
        {product: 'باتری قلمی', list: ['osel', 'onix', 'dewoo', 'DBK', 'sony', 'hyundai']},
      ]
    },
  ] as any
})

export type RootState = ReturnType<typeof state>


