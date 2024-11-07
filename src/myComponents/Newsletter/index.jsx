import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSubscription() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center bg-blue-700 p-8 text-white space-y-6 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Text and Input */}
      <div className="flex flex-col space-y-4 max-w-lg text-center lg:text-left">
        <h2 className="text-2xl font-bold">
          $20 discount for your first order
        </h2>
        <h3 className="text-3xl font-bold">Join our newsletter and get...</h3>
        <p className="text-sm">
          Join our email subscription now to get updates on promotions and
          coupons.
        </p>
        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow">
          <span className="px-3 text-gray-500">
            <i className="fa fa-envelope" />
          </span>
          <Input
            type="email"
            placeholder="Your email address"
            className="p-3 flex-grow outline-none text-gray-700"
          />
          <Button className="bg-blue-600 px-4 py-3 text-white">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-shrink-0 mt-6 lg:mt-0">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHUiGhXx9mMGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698857133845?e=1735776000&v=beta&t=4BH7NsHhbG8dNzbR0sAsDUct-DVoR3aXpVSolY32HJM"
          alt="Discount Offer"
          className="max-w-xs w-50 lg:w-auto rounded-full"
        />
      </div>
    </div>
  );
}
