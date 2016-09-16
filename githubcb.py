#!/usr/bin/env python
import subprocess

def run_cli ( cli_command ):
   process = subprocess.Popen( cli_command, stdout=subprocess.PIPE, shell=True)
   return process.communicate()[0]

print(run_cli( "git pull" ))
