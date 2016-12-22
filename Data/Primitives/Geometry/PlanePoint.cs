using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
    public class PlanePoint
    {

         [BsonElement]
          double X { get; set; }

          [BsonElement]
          double Y { get; set; }
    }

}
