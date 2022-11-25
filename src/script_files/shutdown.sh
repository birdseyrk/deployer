#!/bin/bash

#shutDownHosts.yml -myHost={input}
#example shutDownHosts.yml --extra-vars "ansible_sudo_pass=????  myHosts=????"
#shutDownHosts.yml --extra-vars "ansible_sudo_pass=ansadmin  myHosts=dockerhost"
# need to add the ansible vault stuff in and ask for the vault password.
ansible-playbook /local/ansible/playbooks-system/shutDownHosts.yml --extra-vars "ansible_sudo_pass=ansadmin  myHosts=dockerhost"