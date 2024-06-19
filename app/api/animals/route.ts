import connectDB from '@/config/database';
import Animal from '@/models/Animal';

export const GET = async (request: Request): Promise<Response> => {
  try {
    await connectDB();

    const animals = await Animal.find({});
    return new Response(JSON.stringify(animals), {
      status: 200,
    });
  } catch (error) {
    return new Response(`Something went wrong: ${error}`, { status: 500 });
  }
};
