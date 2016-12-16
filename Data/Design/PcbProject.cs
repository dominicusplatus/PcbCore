using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PcbNext.Data
{

public class PcbProject : IPcbProject
{
        public PcbProject()
        {
            _settings = new PcbSettings();
        }
            
        private PcbSettings  _settings  { get; set; }


        [BsonElement]
        IPcbSettings IPcbProject.Settings
        {
            get
            {
                return _settings;
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        
    }

}
