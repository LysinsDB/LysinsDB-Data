#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ————————————————————————————————————————————————————————————————————————————
# Copyright © 2014 - 2016, Sequømics Research, All rights reserved.
# Copyright © 2014 - 2016, Sequømics Corporation. All rights reserved.
# ————————————————————————————————————————————————————————————————————————————
# Licensed under the Apache License (the "License, version 2.0");
# you may not use this file except in compliance with the License.
# ————————————————————————————————————————————————————————————————————————————
__author__        = ['"Prabhat Kumar" <prabhat.genome@gmail.com>']
__license__       = 'Apache License'
__date__          = '04-12-2016'
__copyright__     = "Copyright © 2006 - 2016, Prabhat Kumar. All rights reserved."
__webserver__     = "http://sequomics.com/"
__license__       = "http://sequomics.com/legal/apache-license.txt"

# ————————————————————————————————————————————————————————————————————————————
module            = 'get'
purpose           = 'Get Proteins from http://www.rcsb.org/pdb/home/home.do'
# ————————————————————————————————————————————————————————————————————————————

# Usage of —————— get.py —————————————————————————————————————————————————————
# python get.py -e 3RDR
# python get.py -p 3HMB,5FS5
# ————————————————————————————————————————————————————————————————————————————

# Load required modules.
import sys
import argparse

PY3 = sys.version > '3'
