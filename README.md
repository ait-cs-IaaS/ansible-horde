# Ansible-Role: horde

Installs and configures [horde webmail](https://www.horde.org/)

## Requirements

- Debian or Ubuntu (18.04 or newer)

## Role Variables


## Example Playbook

```yaml
- hosts: localhost
  roles:
    - horde
  vars:
    horde_vhost_server_name: "mailserver.local"

    # mail config
    horde_mail_domain: "local"
    horde_mail_imap_servername: "mailserver"
    horde_mail_imap_server: "mailserver.local"
    horde_mail_imap_port: 143
    horde_mail_imap_secure: "tls"
    horde_mail_protocol: "imap"

    # Database
    horde_db_user: "horde"
    horde_db_pass: "password"
    horde_db_name: "horde"

```

## License

GPL-3.0

