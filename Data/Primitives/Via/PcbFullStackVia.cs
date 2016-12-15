

using System;
using System.Collections.Generic;

namespace PcbNext.Data
{
    public class PcbFullStackVia : IPcbVia
    {

        public PcbFullStackVia()
        {
            _layerids = new List<int>();
        }

        private double _diameter;
        public double Diameter
        {
            get
            {
                return _diameter;
            }

            set
            {
                _diameter = value;
            }
        }


        private double _holesize;
        public double HoleSize
        {
            get
            {
                return _holesize;
            }

            set
            {
                _holesize = value;
            }
        }

        private int _id;
        public int Id
        {
            get
            {
                return _id;
            }

            set
            {
                _id = value;
            }
        }

        private List<int> _layerids;
        public List<int> LayerIds
        {
            get
            {
                return _layerids;
            }

            set
            {
                _layerids = value;
            }
        }
    }

}
