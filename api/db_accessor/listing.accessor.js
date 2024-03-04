import Connection from "../db/connection.js";
import Listing from "../models/listing.js";

export default class ListingAccessor {
  static async getListingbyLister(listingLister) {
    await Connection.open("listing");
    const listingDB = await Listing.findOne({ lister: listingLister });
    return listingDB;
  }

  static async getAllListers() {
    await Connection.open("listing");
    const allListing = await Listing.find({});
    return allListing;
  }

  static async postLister(doc) {
    const listingDoc = Listing.create(doc);
    return listingDoc;
  }
  


}