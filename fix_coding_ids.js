const fs = require('fs');
const path = require('path');

const content1 = import React from 'react';
import { useParams } from 'react-router-dom';
export default function ProblemDetail() { const { id } = useParams(); return <div>Problem {id}</div>; };

const content2 = import React from 'react';
import { useParams } from 'react-router-dom';
export default function ContestDetail() { const { id } = useParams(); return <div>Contest {id}</div>; };

fs.writeFileSync('apps/client/src/pages/(dashboard)/student/coding/problems/[id]/page.tsx', content1);
fs.writeFileSync('apps/client/src/pages/(dashboard)/student/coding/contest/[id]/page.tsx', content2);
