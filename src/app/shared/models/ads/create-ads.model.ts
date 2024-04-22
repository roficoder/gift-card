export class CreateAdsDTO {
  category_id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  city_id: number | undefined;
  description: string | undefined;
  show_number: boolean | undefined;
  show_email: boolean | undefined;
  show_whatsapp: boolean | undefined;
  images: string[] | undefined;
  fields: fieldsDTO[] = [];
}

export class fieldsDTO {
  attribute_id: number | undefined;
  filter_id: number | undefined;
  value: string | undefined;
}
