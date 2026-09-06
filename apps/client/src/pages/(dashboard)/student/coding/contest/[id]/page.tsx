import React from 'react';
import { useParams } from 'react-router-dom';
export default function ContestDetail() { const { id } = useParams(); return <div>Contest {id}</div>; }
