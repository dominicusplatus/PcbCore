using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
    public interface IPcbRoutePart : IFakeable
    {

         [BsonElement]
          PlanePoint startPoint { get; set; }

          [BsonElement]
          PlanePoint endPoint { get; set; }
          
    }

}
