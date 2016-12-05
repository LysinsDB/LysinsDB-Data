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
module            = 'Get PDB'
purpose           = 'Get Proteins from http://www.rcsb.org/pdb/home/home.do'
# ————————————————————————————————————————————————————————————————————————————

# Usage of ——————— getpdb.py —————————————————————————————————————————————————
# python getpdb.py -p 3HMB
# python getpdb.py -c 3HMB
# python getpdb.py -s 3HMB
# ————————————————————————————————————————————————————————————————————————————

# Load required modules, for SEED™ — Örebro.
import os
import sys
import re
import getopt

PY2 = sys.version > '2'

if PY2:
  import urllib as urllib
else:
  import urllib

from termcolor import colored

def usage():
  print colored('———————————————————————————————————————————————————', 'green')
  print colored('SEED™ — Örebro', 'green'), colored('v1.0.0', 'blue')
  print colored(purpose, 'green')
  print colored('———————————————————————————————————————————————————', 'green')
  print colored("usage: pdb_get [options] <code> ", 'blue')
  print "    where [options] could be:"
  print "       ", colored('-p', 'blue'), "to retrieve PDB format (default)"
  print "       ", colored('-c', 'blue'), "to retrieve mmCIF format"
  print "       ", colored('-s', 'blue'), "to retrieve structure factors along with the PDB format coordinates"
  print "       and <code> is the", colored('4-character', 'blue'), "PDB entry code."

def get_options():
  pdb = 1
  mmCIF = 0
  struct_fact = 0
  try:
    opts,args = getopt.getopt(sys.argv[1:],'hpcs')
  except:
    print 'Unrecognized Option: ', sys.argv[1:]
    usage()
    return pdb, mmCIF, struct_fact

  for o,a in opts:
    if o == '-h':
      usage()
      sys.exit(0)
    elif o == '-p':
      pdb = 1
    elif o == '-c':
      pdb = 0
      mmCIF = 1
    elif o == '-s':
      struct_fact = 1

  return pdb, mmCIF, struct_fact, args

def main():
  (pdb, mmCIF, struct_fact, args) = get_options()

  for code in args:
    code = code.lower()
    # for — '-p'.
    if (pdb == 1):
      print colored("\nSEED™ — Örebro is downloading...", 'blue')
      print "\nfor %s.pdb.gz .........." % (code),
      url = 'ftp://ftp.wwpdb.org/pub/pdb/data/structures/all/pdb/pdb%s.ent.gz' % code
      filename = code + '.pdb.gz'
      try:
        urllib.urlretrieve(url, filename)
        print "Uncompressing %s.pdb.gz" % code
        os.system("gunzip %s.pdb.gz" % code)
      except:
        print "Error retrieving %s" % url
        
    elif (mmCIF == 1):
      # for — '-c'.
      print colored("\nSEED™ — Örebro is downloading...", 'blue')
      print "\nfor %s.cif.gz .........." % (code),
      url = 'ftp://ftp.wwpdb.org/pub/pdb/data/structures/all/mmCIF/%s.cif.gz' % code
      filename = code + '.cif.gz'
      try:
        urllib.urlretrieve(url, filename)
        print "Uncompressing %s.cif.gz" % code
        os.system("gunzip %s.cif.gz" % code)
      except:
        print "Error retrieving %s" % url

    if (struct_fact == 1):
      # for — '-s'.
      print colored("\nSEED™ — Örebro is downloading...", 'blue')
      print "\nfor r%ssf.ent.gz .........." % (code),
      url = 'ftp://ftp.wwpdb.org/pub/pdb/data/structures/all/structure_factors/r%ssf.ent.gz' % code
      filename = 'r' + code + 'sf.ent.gz'
      try:
        urllib.urlretrieve(url, filename)
        print "Uncompressing r%ssf.ent.gz" % code
        os.system("gunzip r%ssf.ent.gz" % code)
      except:
        print "Error retrieving %s" % url
