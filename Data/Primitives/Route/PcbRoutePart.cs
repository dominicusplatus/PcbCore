using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
    public class  PcbRoutePart : IPcbRoutePart
    {

         [BsonElement]
          public PlanePoint startPoint { get; set; }

          [BsonElement]
          public PlanePoint endPoint { get; set; }

          public void Fake()
          {
              
          }
          
    }

}
