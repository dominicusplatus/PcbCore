using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
    public interface IRoute
    {
         [BsonId]
         string Id { get; set; }
      

         [BsonElement]
          double HoleSize { get; set; }

          [BsonElement]
          double Diameter { get; set; }
    }

}
