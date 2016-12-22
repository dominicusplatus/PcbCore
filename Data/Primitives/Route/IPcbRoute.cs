using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
    public interface IPcbRoute : IFakeable
    {
         [BsonId]
         string Id { get; set; }
      
        [BsonElement]
         List<IPcbRoutePart> Parts { get; set; }

        [BsonElement]
         INet Net { get; set; }

    }

}
