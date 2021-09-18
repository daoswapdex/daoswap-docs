import React from 'react';

export default (props: any) => {
  const { address, subject, body } = props;
  let mailtoUrl = `mailto:${address}`;
  if (subject && body) {
    mailtoUrl += `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else if (subject && !body) {
    mailtoUrl += `?subject=${encodeURIComponent(subject)}`;
  } else if (!subject && body) {
    mailtoUrl += `?body=${encodeURIComponent(body)}`;
  }

  return address ? (
    <a href={mailtoUrl}>{address}</a>
  ) : null;
};
