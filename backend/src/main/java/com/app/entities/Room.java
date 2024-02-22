package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
@AllArgsConstructor
public class Room extends BaseEntity {
	@Column(nullable = false)
	public int floor;
	@Column(nullable = false)
	public String roomType;
	@OneToOne
	private Packagee pack;
	
}
