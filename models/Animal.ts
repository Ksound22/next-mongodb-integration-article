import { Schema, model, models, Document } from 'mongoose';

interface IAnimal extends Document {
  name: string;
  scientific_name: string;
  male_name: string;
  female_name: string;
  offspring_name: string;
  description: string;
  geographic_location: string;
  litter: string;
  natural_enemy: string;
  diet: string;
  life_span: number;
  image: string;
}

const AnimalSchema = new Schema<IAnimal>(
  {
    name: {
      type: String,
      required: true,
    },
    scientific_name: {
      type: String,
      required: true,
    },
    male_name: {
      type: String,
      required: true,
    },
    female_name: {
      type: String,
      required: true,
    },
    offspring_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    geographic_location: {
      type: String,
      required: true,
    },
    litter: {
      type: String,
      required: true,
    },
    natural_enemy: {
      type: String,
      required: true,
    },
    diet: {
      type: String,
      required: true,
    },
    life_span: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {}
);

const Animal = models.Animal || model<IAnimal>('Animal', AnimalSchema);

export default Animal;
