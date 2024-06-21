import { Injectable } from '@angular/core';

interface UserResult {
  id: number;
  score: number | null;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserResultsService {
  private userResults: UserResult[] = [];

  constructor() {}

  setUserResult(userId: number, score: number | null, status: string) {
    const existingIndex = this.userResults.findIndex(result => result.id === userId);

    if (existingIndex !== -1) {
      // Update existing entry
      this.userResults[existingIndex] = { id: userId, score, status };
    } else {
      // Add new entry
      this.userResults.push({ id: userId, score, status });
    }
  }

  getUserResult(userId: number): UserResult | null {
    const result = this.userResults.find(result => result.id === userId);
    return result ? { ...result } : null; // Return a copy to avoid direct mutation
  }
}


