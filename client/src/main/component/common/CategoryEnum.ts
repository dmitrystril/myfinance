class CategoryEnum  {
  static TAXES = 0 ;
  static BILLS = 1;

  static getTitle = (key: number) => {
    switch (key) {
      case CategoryEnum.TAXES:
        return "Taxes";
      case CategoryEnum.BILLS:
        return "Bills";
      default:
        return "";
    }
  }
}

export default CategoryEnum;
