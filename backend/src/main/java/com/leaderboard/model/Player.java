
package com.leaderboard.model;

import jakarta.persistence.*;

@Entity
public class Player {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String name;
private int score;
private String avatar;

public Long getId(){ return id; }

public String getName(){ return name; }
public void setName(String name){ this.name=name; }

public int getScore(){ return score; }
public void setScore(int score){ this.score=score; }

public String getAvatar(){ return avatar; }
public void setAvatar(String avatar){ this.avatar=avatar; }

}
